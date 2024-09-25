import { Button } from "@components/ui/Button";
import { Spinner } from "@components/ui/Spinner";
import { useTranslation } from "react-i18next";

interface LoaderProp {
  isSubmitting: boolean;
  isDisabled: boolean;
}

const SubmitButton: React.FC<LoaderProp> = ({ isSubmitting, isDisabled }) => {
  const { t } = useTranslation();

  return (
    <Button
      type="submit"
      className={`mt-8 flex w-full gap-4 ${isSubmitting && "bg-accent1-80"}`}
      disabled={isDisabled}
    >
      {isSubmitting && <Spinner />} {t("contact.submitButton")}
    </Button>
  );
};
SubmitButton.displayName = "SubmitButton";

export { SubmitButton };
