import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import pt from './locations/pt.json'
import en from './locations/en.json'
import es from './locations/es.json'


const i18n = createI18n({
  locale: 'pt', // idioma padrão
  fallbackLocale: 'en',
  messages: { pt, en, es },
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
