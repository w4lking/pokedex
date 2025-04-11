<template>
  <div class="header">
    <img
      class="main-sprite"
      :src="pokemon.sprites.front_default"
      :alt="pokemon.name"
    />
    <div class="info">
      <h1>{{ capitalize(pokemon.name) }}</h1>
      <p class="id">ID: {{ pokemon.id }}</p>
      <div class="types">
        <span
          v-for="type in pokemon.types"
          :key="type.type.name"
          class="type"
          :class="'type-' + type.type.name"
        >
          {{ type.type.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.main-sprite {
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 50%;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.info h1 {
  font-size: 2rem;
  margin: 0;
  color: #000;
}

.id {
  font-size: 1.2rem;
  color: #666;
}


.types {
  margin-top: 0.5rem;
}

.type {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-transform: capitalize;
  font-weight: bold;
  color: #fff;
  display: inline-block;
  margin-right: 8px;
}

/* Tipos */
.type-fire { background-color: #f08030; }
.type-water { background-color: #6890f0; }
.type-grass { background-color: #78c850; }
.type-electric { background-color: #f8d030; color: #000; }
.type-ice { background-color: #98d8d8; color: #000; }
.type-fighting { background-color: #c03028; }
.type-poison { background-color: #a040a0; }
.type-ground { background-color: #e0c068; color: #000; }
.type-flying { background-color: #a890f0; }
.type-psychic { background-color: #f85888; }
.type-bug { background-color: #a8b820; }
.type-rock { background-color: #b8a038; }
.type-ghost { background-color: #705898; }
.type-dragon { background-color: #7038f8; }
.type-dark { background-color: #705848; }
.type-steel { background-color: #b8b8d0; color: #000; }
.type-fairy { background-color: #ee99ac; color: #000; }
.type-normal { background-color: #a8a878; }

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .main-sprite {
    width: 100px;
    height: 100px;
  }

  .info h1 {
    font-size: 1.5rem;
  }

  .id {
    font-size: 1rem;
  }

  .type {
    font-size: 0.8rem;
    padding: 3px 8px;
    margin-bottom: 4px;
  }
}
</style>
