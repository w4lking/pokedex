<template>
  <section class="section" v-if="evolutions.length">
    <h2>{{t('evolutions')}}</h2>
    <ul class="evo-list">
      <li
        v-for="evo in evolutions"
        :key="evo"
        :class="{ final: evo === currentPokemon }"
      >
        {{ evo }}
      </li>
    </ul>
    <p v-if="isFinal" class="final-msg">
      {{t('final_form')}} ✅
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  evolutions: Array,
  currentPokemon: String
})

const isFinal = computed(() =>
  props.evolutions.length ? props.currentPokemon === props.evolutions.at(-1) : false
)

const { t } = useI18n()
</script>

<style scoped>
.section h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}
/* Lista de evoluções */
.evo-list {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.evo-list li {
  background: #dff0d8;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: #3c763d;
  font-weight: bold;
}

/* Quando for a última evolução */
.evo-list li.final {
  background-color: #b1e7b5;
  border: 2px solid #4caf50;
  border-radius: 6px;
  padding: 0.3rem 0.6rem;
  font-weight: bold;
}

/* Mensagem final de evolução */
.final-msg {
  margin-top: 0.5rem;
  color: #388e3c;
  font-style: italic;
}

/* Responsividade da lista de evoluções */
@media (max-width: 768px) {
  .evo-list {
    flex-direction: column;
    align-items: center;
  }

  .evo-list li {
    width: 100%;
    text-align: center;
  }
}
/* Estilo geral da seção de evoluções */
</style>
