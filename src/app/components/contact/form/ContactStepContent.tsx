import ContactDetailsStep from "./steps/ContactDetailsStep";
import OptionStep from "./steps/OptionStep";
import {
  ContactField,
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
  onChange: (field: ContactField, value: string | boolean) => void;
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
      const question = currentQuestions[currentStep.questionIndex];

      return (
        <OptionStep
          title={`${step + 1}. ${question?.question ?? ""}`}
          options={question?.options ?? []}
          value={formData[currentStep.field]}
          error={errors[currentStep.field]}
          onSelect={(value) => onChange(currentStep.field, value)}
        />
      );
    }

    case "area":
      return (
        <OptionStep
          title={currentStep.title}
          options={currentStep.options}
          value={formData.area}
          error={errors.area}
          onSelect={(value) => onChange("area", value)}
        />
      );

    case "budget":
      return (
        <OptionStep
          title={currentStep.title}
          options={currentStep.options}
          value={formData.budget}
          error={errors.budget}
          onSelect={(value) => onChange("budget", value)}
        />
      );

    case "timeline":
      return (
        <OptionStep
          title={currentStep.title}
          options={currentStep.options}
          value={formData.timeline}
          error={errors.timeline}
          onSelect={(value) => onChange("timeline", value)}
        />
      );

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