import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      // Specify options to use localStorage
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Default language fallback
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(console.log);

export default i18n;
