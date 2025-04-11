<template>
  <section class="section">
    <h2>Movimentos de Ataque</h2>
    <ul class="list">
      <li v-for="move in moves" :key="move.move.name">
        {{ move.move.name }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  moves: { move: { name: string } }[]
}>()
</script>

<style scoped>
.section {
  margin-bottom: 2rem;
}

.section h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.list li {
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .list {
    flex-direction: column;
    align-items: center;
  }

  .list li {
    width: 100%;
    text-align: center;
  }
}
</style>
