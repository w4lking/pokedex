// src/i18n.ts
import { createI18n } from 'vue-i18n'
import messages from './i18n/index.ts' // Importa o objeto diretamente

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages,
})

export default i18n
