import { createI18n } from 'vue-i18n'
import pt from './locations/pt.json'
import en from './locations/en.json'
import es from './locations/es.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt,
    en,
    es
  }
})

export default i18n
