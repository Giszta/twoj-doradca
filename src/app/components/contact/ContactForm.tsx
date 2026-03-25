"use client";

import { AnimatePresence, motion } from "framer-motion";
import { progressLabels } from "./form/config";
import ContactNavigation from "./form/ContactNavigation";
import ContactProgress from "./form/ContactProgress";
import ContactStepContent from "./form/ContactStepContent";
import ContactSuccess from "./form/ContactSuccess";
import { useContactForm } from "./form/useContactForm";

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid gap-4"
          >
            <ContactStepContent
              step={step}
              currentStep={currentStep}
              currentQuestions={currentQuestions}
              formData={formData}
              errors={errors}
              onChange={updateField}
            />

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