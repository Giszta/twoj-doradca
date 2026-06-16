"use client";

import { useMemo, useState } from "react";
import { productQuestions } from "./config";
import {
  ContactFormData,
  ContactFormErrors,
  ContactStep,
  ProductOption,
  productOptions,
} from "./types";
import {
  initialFormData,
  validateAnswerAtIndex,
  validateContactData,
  validateField,
} from "./utils";

export function useContactForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Compute visible steps dynamically — respects showIf conditions
  const currentSteps = useMemo((): readonly ContactStep[] => {
    const productStep: ContactStep = {
      type: "product",
      title: "Czym się interesujesz?",
      field: "product",
      options: productOptions,
    };

    const contactStep: ContactStep = {
      type: "contact",
      title: "Twoje dane kontaktowe",
    };

    if (!formData.product) {
      return [productStep, contactStep];
    }

    const questions = productQuestions[formData.product];
    const questionSteps: ContactStep[] = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => {
        if (!q.showIf) return true;
        return formData.answers[q.showIf.questionIndex] === q.showIf.answer;
      })
      .map(({ i }) => ({
        type: "question" as const,
        title: `Pytanie`,
        questionIndex: i,
      }));

    return [productStep, ...questionSteps, contactStep];
  }, [formData.product, formData.answers]);

  const progressLabels = useMemo(() => {
    let qNum = 0;
    return currentSteps.map((s) => {
      if (s.type === "product") return "Produkt";
      if (s.type === "question") { qNum++; return `Pyt. ${qNum}`; }
      return "Kontakt";
    });
  }, [currentSteps]);

  const safeStep = Math.min(step, currentSteps.length - 1);
  const currentStep = currentSteps[safeStep];

  const currentQuestions = useMemo(() => {
    if (!formData.product) return [];
    return productQuestions[formData.product];
  }, [formData.product]);

  const updateField = (field: string, value: string | boolean) => {
    const answerMatch = field.match(/^answers_(\d+)$/);
    const answerDetailMatch = field.match(/^answerDetails_(\d+)$/);

    if (answerMatch) {
      const index = parseInt(answerMatch[1], 10);
      setFormData((prev) => {
        const newAnswers = [...prev.answers];
        newAnswers[index] = value as string;

        const newDetails = { ...prev.answerDetails };
        // Clear follow-up detail for this answer
        delete newDetails[index];

        // Clear answers for conditional questions whose showIf is no longer satisfied
        if (prev.product) {
          const questions = productQuestions[prev.product];
          questions.forEach((q, i) => {
            if (
              q.showIf &&
              q.showIf.questionIndex === index &&
              newAnswers[index] !== q.showIf.answer
            ) {
              newAnswers[i] = "";
              delete newDetails[i];
            }
          });
        }

        return { ...prev, answers: newAnswers, answerDetails: newDetails };
      });
    } else if (answerDetailMatch) {
      const index = parseInt(answerDetailMatch[1], 10);
      setFormData((prev) => ({
        ...prev,
        answerDetails: { ...prev.answerDetails, [index]: value as string },
      }));
    } else if (field === "product") {
      setFormData((prev) => ({
        ...prev,
        product: value as ProductOption | "",
        answers: [],
        answerDetails: {},
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }

    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const isCurrentStepValid = () => {
    switch (currentStep.type) {
      case "product":
        return !!formData.product;

      case "question":
        return !!formData.answers[currentStep.questionIndex];

      case "contact":
        return (
          !!formData.name.trim() &&
          !!formData.email.trim() &&
          !!formData.phone.trim() &&
          formData.consentRequired === true &&
          Object.keys(validateContactData(formData)).length === 0
        );

      default:
        return true;
    }
  };

  const validateCurrentStep = () => {
    const nextErrors: ContactFormErrors = {};

    switch (currentStep.type) {
      case "product": {
        const error = validateField("product", formData.product);
        if (error) nextErrors.product = error;
        break;
      }

      case "question": {
        const errorKey = `answers_${currentStep.questionIndex}`;
        const error = validateAnswerAtIndex(
          formData.answers,
          currentStep.questionIndex
        );
        if (error) nextErrors[errorKey] = error;
        break;
      }

      case "contact": {
        Object.assign(nextErrors, validateContactData(formData));
        break;
      }
    }

    setErrors((prev) => ({ ...prev, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  };

  const next = () => {
    if (!validateCurrentStep()) return;
    setStep((prev) => Math.min(prev + 1, currentSteps.length - 1));
  };

  const prev = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const submit = async () => {
    if (!validateCurrentStep()) return false;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Nie udało się wysłać formularza.");
      }

      setIsSubmitted(true);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    step: safeStep,
    currentStep,
    currentSteps,
    currentQuestions,
    progressLabels,
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    isCurrentStepValid,
    updateField,
    next,
    prev,
    submit,
    totalSteps: currentSteps.length,
  };
}
