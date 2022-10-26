import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "../src/locales/en/translation.json";
import translationPT from "../src/locales/pt/translation.json";

i18n
  .use(LanguageDetector)
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'pt',
    debug: true,
      resources: {
          en: {
              translation: translationEN
          },
          pt: {
              translation: translationPT
          }
      },

    ns: ["translation"],
    defaultNS: "translation",

    lng: "pt",

    keySeparator: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;