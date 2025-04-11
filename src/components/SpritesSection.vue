<template>
  <section class="section">
    <h2>Sprites</h2>
    <div class="sprites">
      <img
        v-for="(img, key) in sprites"
        :key="key"
        :src="img"
        alt="sprite"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  sprites: string[]
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

.sprites {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.sprites img {
  max-width: 80px;
  background: #fff;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .sprites {
    justify-content: center;
  }

  .sprites img {
    max-width: 60px;
  }
}
</style>
