<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
</script>

<template>
  <div class="card-container card-medium">
    <h2>Bemerkungen</h2>
    <label for="cust-service-card-notes">Bemerkungen:</label>
    <textarea id="cust-service-card-notes" v-model="currentCustomer.notes"
      @input="emitUpdate"></textarea>
  </div>
</template>

<style scoped>
label {
  visibility: hidden;
}
</style>