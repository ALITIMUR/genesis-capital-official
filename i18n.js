import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ru from './locales/ru.json'
import ar from './locales/ar.json'
import zh from './locales/zh.json'
import tr from './locales/tr.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    ar: { translation: ar },
    zh: { translation: zh },
    tr: { translation: tr },
  },
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
