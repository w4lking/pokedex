import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from '../views/PokemonList.vue'
import PokemonDetail from '../views/PokemonDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonList
    },
    {
      path: '/pokemon/:name',
      name: 'PokemonDetail',
      component: PokemonDetail
    }
  ]
})

export default router
