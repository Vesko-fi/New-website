import { useTranslation } from "react-i18next";
import { Button } from "./Button";

interface DialogueBoxProps {
  message: string;
  onClose: () => void;
}
const DialogeBox: React.FC<DialogueBoxProps> = ({ message, onClose }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">{t("contact.success")}</h2>
        <p className="mb-4">{message}</p>
        <Button onClick={onClose}>{t("contact.close")}</Button>
      </div>
    </div>
  );
};
DialogeBox.displayName = "DialogBox";

export { DialogeBox };
