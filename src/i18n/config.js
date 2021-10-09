import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import en from "./en.json";
import zh from "./zh.json";

import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    lng: "zh",
    fallbackLng: "zh",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
