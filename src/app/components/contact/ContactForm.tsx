"use client";

import { AnimatePresence, motion } from "framer-motion";
import { formSteps, progressLabels } from "./form/config";
import { useContactForm } from "./form/useContactForm";
import ContactNavigation from "./form/ContactNavigation";
import ContactProgress from "./form/ContactProgress";
import ContactSuccess from "./form/ContactSuccess";
import ContactDetailsStep from "./form/steps/ContactDetailsStep";
import OptionStep from "./form/steps/OptionStep";

export default function ContactForm() {
  const {
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
    totalSteps,
  } = useContactForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitter = (e.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null;

    const intent = submitter?.value;

    if (intent === "next") {
      next();
      return;
    }

    await submit();
  };

  if (isSubmitted) {
    return <ContactSuccess />;
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-6 sm:p-10"
    >
      <ContactProgress step={step} steps={progressLabels} />

      <motion.div
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0,  }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid gap-4 "
          >
            {currentStep.type === "product" && (
              <OptionStep
                title={currentStep.title}
                options={currentStep.options}
                value={formData.product}
                error={errors.product}
                onSelect={(value) => updateField("product", value)}
              />
            )}

            {currentStep.type === "question" && (
              <OptionStep
                title={`${step + 1}. ${currentQuestions[currentStep.questionIndex]?.question ?? ""}`}
                options={currentQuestions[currentStep.questionIndex]?.options ?? []}
                value={formData[currentStep.field]}
                error={errors[currentStep.field]}
                onSelect={(value) => updateField(currentStep.field, value)}
              />
            )}

            {currentStep.type === "area" && (
              <OptionStep
                title={currentStep.title}
                options={currentStep.options}
                value={formData.area}
                error={errors.area}
                onSelect={(value) => updateField("area", value)}
              />
            )}

            {currentStep.type === "budget" && (
              <OptionStep
                title={currentStep.title}
                options={currentStep.options}
                value={formData.budget}
                error={errors.budget}
                onSelect={(value) => updateField("budget", value)}
              />
            )}

            {currentStep.type === "timeline" && (
              <OptionStep
                title={currentStep.title}
                options={currentStep.options}
                value={formData.timeline}
                error={errors.timeline}
                onSelect={(value) => updateField("timeline", value)}
              />
            )}

            {currentStep.type === "contact" && (
              <ContactDetailsStep
                data={formData}
                errors={errors}
                onChange={updateField}
              />
            )}

            <ContactNavigation
              step={step}
              totalSteps={totalSteps}
              isSubmitting={isSubmitting}
              isStepValid={isCurrentStepValid()}
              onPrev={prev}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.form>
  );
}