import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// هتحدد اللغه اللي انت مختارها حاليا
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // lng: lang === "en" ? lang : "en",
    detection: {
      order: [
        "localStorage",
        "cookie",
        "htmlTag",
        "querystring",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locale/{{lng}}/translation.json",
    },
    // interpolation: {
    //   escapeValue: false,
    // },
    // react: {
    //   useSuspanse: false,
    // },
    // interpolation: {
    //   escapeValue: false
    // }
    fallbackLng: "en",
  });

export default i18n;
