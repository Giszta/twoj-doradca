"use client";

import { useMemo, useState } from "react";
import { formSteps, productQuestions } from "./config";
import { ContactField, ContactFormData, ContactFormErrors } from "./types";
import {
  initialFormData,
  validateContactData,
  validateField,
} from "./utils";

export function useContactForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentStep = formSteps[step];

  const currentQuestions = useMemo(() => {
    if (!formData.product) return [];
    return productQuestions[formData.product];
  }, [formData.product]);

  const updateField = (field: ContactField, value: string) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };

      if (field === "product" && prev.product !== value) {
        next.answer1 = "";
        next.answer2 = "";
        next.answer3 = "";
      }

      return next;
    });

    setErrors((prev) => {
      const next = { ...prev };
      const error = validateField(field, value);

      if (error) next[field] = error;
      else delete next[field];

      return next;
    });
  };

  const isCurrentStepValid = () => {
    switch (currentStep.type) {
      case "product":
      case "area":
      case "budget":
      case "timeline":
        return !!formData[currentStep.field];

      case "question":
        return !!formData[currentStep.field];

      case "contact":
        return (
          !!formData.name.trim() &&
          !!formData.email.trim() &&
          !!formData.phone.trim() &&
          Object.keys(validateContactData(formData)).length === 0
        );

      default:
        return true;
    }
  };

  const validateCurrentStep = () => {
    const nextErrors: ContactFormErrors = {};

    switch (currentStep.type) {
      case "product":
      case "area":
      case "budget":
      case "timeline": {
        const value = formData[currentStep.field];
        const error = validateField(currentStep.field, value);
        if (error) nextErrors[currentStep.field] = error;
        break;
      }

      case "question": {
        const value = formData[currentStep.field];
        const error = validateField(currentStep.field, value);
        if (error) nextErrors[currentStep.field] = error;
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
    setStep((prev) => Math.min(prev + 1, formSteps.length - 1));
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
        headers: {
          "Content-Type": "application/json",
        },
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
    step,
    currentStep,
    currentQuestions,
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    isCurrentStepValid,
    updateField,
    next,
    prev,
    submit,
    totalSteps: formSteps.length,
  };
}