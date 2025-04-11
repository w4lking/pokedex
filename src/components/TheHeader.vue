<template>
  <header class="header">
    <div class="header-content">
      <button 
        v-if="route.name === 'PokemonDetail'" 
        @click="router.back()" 
        class="back-button"
      >
        {{ t('back') }}
      </button>

      <h1>{{ t('title') }}</h1>

      <div class="language-select">
        <select :value="locale" @change="onLanguageChange">
          <option value="pt">🇧🇷</option>
          <option value="en">🇺🇸</option>
          <option value="es">🇪🇸</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()

const { t, locale } = useI18n()

function onLanguageChange(event: Event) {
  const target = event.target as HTMLSelectElement
  setLanguage(target.value)
}


function setLanguage(value: string) {
  throw new Error('Function not implemented.')
}
</script>

<style scoped>
.header {
  background-color: #ef5350;
  color: white;
  padding: 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}

.back-button {
  position: absolute;
  left: 0;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.back-button:hover {
  background-color: #d32f2f;
}

.language-select {
  position: absolute;
  right: 0;
}

.language-select select {
  background-color: white;
  color: black;
  border-radius: 6px;
  padding: 0.3rem 0.5rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}
</style>
