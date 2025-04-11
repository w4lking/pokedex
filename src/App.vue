<template>
  <div class="app-container">
    <HeaderComponent />
    
    <main class="main-content">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/TheHeader.vue'
import FooterComponent from './components/TheFooterComponent.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style>
