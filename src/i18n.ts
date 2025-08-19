import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const saved = localStorage.getItem("lang") as "he" | "en" | null;
const lang = saved || "he";

i18n
  .use(initReactI18next)
  .init({
    lng: lang,
    fallbackLng: "he",
    interpolation: { escapeValue: false },
    resources: {
      he: { common: {} }, // נטען קבצים חיצוניים למטה
      en: { common: {} },
    },
  });

// שליטה בכיוון (RTL/LTR)
const dir = lang === "he" ? "rtl" : "ltr";
document.documentElement.setAttribute("dir", dir);

export default i18n;