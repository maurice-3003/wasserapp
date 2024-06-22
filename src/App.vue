<template>
  <LoadingAnimation v-if="customersLoading" />
  <main v-else class="app-container">
    <BaseNavbar />
    <RouterView />
  </main>
</template>

<script setup>
import BaseNavbar from './components/BaseNavbar.vue'
import LoadingAnimation from './components/LoadingAnimation.vue';
import { RouterView } from 'vue-router';
import { useCustomersStore } from './stores/CustomersStore';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';

const customersStore = useCustomersStore();
const { loadCustomers } = customersStore;
const { customersLoading } = storeToRefs(customersStore);

onBeforeMount(() => loadCustomers());
</script>

<style scoped>
.app-container {
  display: flex;
  column-gap: var(--container-margin);
  height: 100vh;
  width: 100vw;
  padding: 0.5em;
}

RouterView {
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>