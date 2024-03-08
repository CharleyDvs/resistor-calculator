import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en_US } from './languages/en_US';

export const langConfig = {
  lng: 'en_US',
  resources: {
    en_US: {
      translation: en_US,
    },
  },
};

i18next.use(initReactI18next).init(langConfig);

export const instance = i18next;
