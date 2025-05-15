<template>
  <div class="pokemon-list">

    <!-- input de busca -->
    <input v-model="search" :placeholder="t('search')" />

    <!-- lista de pokémons -->
    <TransitionGroup name="fade" tag="div" class="grid">
      <router-link
        v-for="pokemon in filteredPokemons" :key="pokemon.name" :to="{ name: 'PokemonDetail', params: { name: pokemon.name } }" class="card"
        :class="pokemon.types[0]">
        <img :src="pokemon.image" alt="pokemon" />
        <p>{{ pokemon.name }}</p>
        <span class="badge">{{ translateType(pokemon.types[0]) }}</span>
      </router-link>
    </TransitionGroup>

    <!-- loading -->
    <div v-if="loading" class="loading">{{ $t('loading') }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import { translateType } from '@/utils/translateType'

const { t } = useI18n()

const pokemons = ref<any[]>([])
const offset = ref(0)
const limit = 50
const loading = ref(false)
const search = ref('')

const loadPokemons = async () => {
  if (loading.value) return
  loading.value = true

  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=${limit}`,
  )
  const results = res.data.results

  for (const item of results) {
    const detail = await axios.get(item.url)
    pokemons.value.push({
      name: detail.data.name,
      id: detail.data.id,
      image: detail.data.sprites.front_default,
      types: detail.data.types.map((t: { type: { name: any } }) => t.type.name),
      species: detail.data.species.name,
    })
  }

  offset.value += limit
  loading.value = false
}

onMounted(() => {
  loadPokemons()
  window.addEventListener('scroll', onScroll)
})

const onScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    loadPokemons()
  }
}

const filteredPokemons = computed(() => {
  if (!search.value) return pokemons.value
  const s = search.value.toLowerCase()
  return pokemons.value.filter((p) => p.name.includes(s) || String(p.id).includes(s)) 
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.pokemon-list {
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  color: #222;
  max-width: 1600px;
  margin: 0 auto;
}

input {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  margin: 0 auto 2rem;
  display: block;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
  outline: none;
  background: #f9f9f9;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  background: white;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.card {
  width: 140px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.card p {
  margin: 0;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1rem;
  color: #333;
}

.loading {
  text-align: center;
  margin: 2rem 0;
  font-size: 1.2rem;
  color: #666;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}

/* Badge do tipo */
.badge {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 999px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #999;
}

/* Estilo baseado nos tipos */
.card.fire {
  background-color: #fddfdf;
  border: 2px solid #fba69a;
}
.card.water {
  background-color: #def3fd;
  border: 2px solid #7ac5ff;
}
.card.grass {
  background-color: #defde0;
  border: 2px solid #80e572;
}
.card.electric {
  background-color: #fcf7de;
  border: 2px solid #ffe564;
}
.card.ice {
  background-color: #e0f5ff;
  border: 2px solid #a0e6ff;
}
.card.dragon {
  background-color: #e6e0ff;
  border: 2px solid #b39eff;
}
.card.psychic {
  background-color: #fceaff;
  border: 2px solid #e09eff;
}
.card.normal {
  background-color: #f4f4f4;
  border: 2px solid #ccc;
}
.card.bug {
  background-color: #f8fbd4;
  border: 2px solid #dbe57b;
}
.card.rock {
  background-color: #eae0c2;
  border: 2px solid #c1a76f;
}
.card.ghost {
  background-color: #e8e2f8;
  border: 2px solid #a99ecf;
}
.card.fighting {
  background-color: #fddede;
  border: 2px solid #ff9b9b;
}
</style>
