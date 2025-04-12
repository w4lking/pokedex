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

      <h1>Pokédex</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
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
  justify-content: center;
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
</style>
