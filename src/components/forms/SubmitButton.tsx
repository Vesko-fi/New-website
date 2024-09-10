import { Button } from "@components/ui/Button";
import { useTranslation } from "react-i18next";

const SubmitButton: React.FC = () => {
  const { t } = useTranslation();
  return <Button className="mt-8 w-full">{t("contactForm.submit")}</Button>;
};
SubmitButton.displayName = "SubmitButton";

export { SubmitButton };
