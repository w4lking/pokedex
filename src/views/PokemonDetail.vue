<script setup>
// Vue
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Lib
import axios from 'axios'

// Components
import PokemonHeader from '@/components/PokemonHeader.vue'
import SpritesSection from '@/components/SpritesSection.vue'
import MovesSection from '@/components/MovesSection.vue'
import GamesSection from '@/components/GamesSection.vue'
import EvolutionsSection from '@/components/EvolutionsSection.vue'


const route = useRoute()
const name = route.params.name

const pokemon = ref(null)
const evolutions = ref([])

const fetchPokemonDetails = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    pokemon.value = data

    const speciesUrl = data.species.url
    const { data: speciesData } = await axios.get(speciesUrl)
    const evoUrl = speciesData.evolution_chain.url
    const { data: evoData } = await axios.get(evoUrl)

    const evoList = []
    let current = evoData.chain
    while (current) {
      evoList.push(current.species.name.toLowerCase())
      current = current.evolves_to?.[0]
    }
    evolutions.value = evoList
  } catch (err) {
    console.error('Erro ao buscar detalhes do Pokémon:', err)
  }
}

const filteredSprites = computed(() => {
  if (!pokemon.value) return []
  return Object.entries(pokemon.value.sprites)
    .filter(([, value]) => typeof value === 'string' && value)
    .map(([, value]) => value)
})


const firstMoves = computed(() => pokemon.value?.moves.slice(0, 10) || [])

onMounted(fetchPokemonDetails)
</script>


<template>
  <div class="detail-container" v-if="pokemon">
    <PokemonHeader :pokemon="pokemon" />
    <SpritesSection :sprites="filteredSprites" />
    <MovesSection :moves="firstMoves" />
    <GamesSection :games="pokemon.game_indices" />
    <EvolutionsSection
      v-if="evolutions.length"
      :evolutions="evolutions"
      :currentPokemon="pokemon.name"
    />
  </div>

  <div v-else class="loading-detail">Carregando detalhes...</div>
</template>

<style scoped>
.detail-container {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.loading-detail {
  text-align: center;
  padding: 3rem;
  font-size: 1.5rem;
  color: #666;
}

@media (max-width: 768px) {
  .detail-container {
    padding: 1rem;
  }
}
</style>
