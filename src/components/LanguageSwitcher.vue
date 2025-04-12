<template>
  <div class="lang-switcher">
    <button
      v-for="lang in availableLocales"
      :key="lang"
      @click="setLanguage(lang)"
      :class="{ active: locale === lang }"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()

function setLanguage(lang: string) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  background: #ccc;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}
button.active {
  background: #3b82f6;
  color: white;
}
</style>
