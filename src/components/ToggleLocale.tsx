import { useTranslation } from "react-i18next";

import { LOCALE_ITEMS } from "@constants/lists";

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
      className="block cursor-pointer rounded-md border bg-transparent p-2 text-xs font-semibold tracking-wider border-accent1-10 outline-accent1-40"
    >
      {LOCALE_ITEMS.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  );
};
