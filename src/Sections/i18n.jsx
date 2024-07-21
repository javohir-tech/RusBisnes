import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uaTranslation from '../../public/Locales/ua.json';
import ruTranslation from '../../public/Locales/ru.json';

// const language = localStorage.getItem('i18nextLng')

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // Qayta til kodi
    lng: 'ru', // Sukutdagi til kodi
    debug: true, // Ogohlantirishni yoqish (xatolikni topish uchun)
    resources: {
      ua: {
        translation: uaTranslation // ukran til tarjimalari
      },
      ru: {
        translation: ruTranslation // Rus til tarjimalari
      }
    },
    interpolation: {
      escapeValue: false // Qaytarilgan qiymatlar qattiq qanday bo'lishi
    }
  });

export default i18n;