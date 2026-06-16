import { AnimatePresence, motion } from "framer-motion";
import ContactDetailsStep from "./steps/ContactDetailsStep";
import OptionStep from "./steps/OptionStep";
import TextField from "./fields/TextField";
import {
  ContactFormData,
  ContactFormErrors,
  ContactStep,
  QuestionConfig,
} from "./types";

type Props = {
  step: number;
  currentStep: ContactStep;
  currentQuestions: readonly QuestionConfig[];
  formData: ContactFormData;
  errors: ContactFormErrors;
  onChange: (field: string, value: string | boolean) => void;
};

export default function ContactStepContent({
  step,
  currentStep,
  currentQuestions,
  formData,
  errors,
  onChange,
}: Props) {
  switch (currentStep.type) {
    case "product":
      return (
        <OptionStep
          title={currentStep.title}
          options={currentStep.options}
          value={formData.product}
          error={errors.product}
          onSelect={(value) => onChange("product", value)}
        />
      );

    case "question": {
      const { questionIndex } = currentStep;
      const question = currentQuestions[questionIndex];
      const answerKey = `answers_${questionIndex}`;
      const detailKey = `answerDetails_${questionIndex}`;
      const selectedValue = formData.answers[questionIndex] ?? "";
      const showFollowUp =
        !!question?.followUp &&
        selectedValue === question.followUp.triggerOption;

      return (
        <div className="grid gap-4">
          <OptionStep
            title={`${step + 1}. ${question?.question ?? ""}`}
            options={question?.options ?? []}
            value={selectedValue}
            error={errors[answerKey]}
            onSelect={(value) => onChange(answerKey, value)}
          />

          <AnimatePresence>
            {showFollowUp && (
              <motion.div
                key={detailKey}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <TextField
                  id={detailKey}
                  label={
                    question.followUp!.label ?? "Jakie produkty Cię interesują?"
                  }
                  value={formData.answerDetails[questionIndex] ?? ""}
                  onChange={(value) => onChange(detailKey, value)}
                  multiline
                  rows={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    case "contact":
      return (
        <ContactDetailsStep
          data={formData}
          errors={errors}
          onChange={onChange}
        />
      );

    default:
      return null;
  }
}
