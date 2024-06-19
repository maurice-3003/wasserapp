<template>
  <main class="app-container">
    <BaseNavbar />
    <RouterView />
  </main>
</template>

<script setup>
import BaseNavbar from './components/BaseNavbar.vue'
import { RouterView } from 'vue-router';
</script>

<style scoped>
.app-container {
  display: flex;
  column-gap: var(--container-margin);
  height: 100vh;
  width: 100vw;
  padding: 0.5em;
}

/* RouterView {
  flex: 1;
  height: 100%;
  overflow: auto;
} */
</style>