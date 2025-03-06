import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './pt/translation.json';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  lng: 'pt',
  resources: {
    pt: {
      translation,
    },
  },
});

export default i18next;
