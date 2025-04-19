import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

const language = localStorage.getItem("i18nextLng");

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: language,
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
  });
