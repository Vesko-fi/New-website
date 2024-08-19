import { LOCALE_ITEMS } from "@constants/lists";
import { useTranslation } from "react-i18next";

export const ToggleLocale: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    i18n.changeLanguage(event.target.value as string).catch(console.log);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      className="cursor-pointer rounded-md p-2 text-sm font-medium tracking-wider outline-accent1"
    >
      {LOCALE_ITEMS.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  );
};
