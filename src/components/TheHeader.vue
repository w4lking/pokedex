<template>
  <header class="header">
    <div class="header-content">
      <button 
        v-if="route.name === 'PokemonDetail'" 
        @click="router.back()" 
        class="back-button"
      >
        ← Voltar
      </button>
      <h1>Pokédex</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
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
  gap: 1rem;
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
