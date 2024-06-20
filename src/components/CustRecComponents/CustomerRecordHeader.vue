<template>
  <div class="customer-record-header">
    <div class="input-container">
      <input type="text" id="cust-header-card-name-id"
        v-model="currentCustomer.nameID" required>
    </div>
    <div class="button-container" v-if="customerChanged">
      <button @click="updateCustomerDbEntry">Änderungen speichern</button>
    </div>
  </div>
</template>

<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
const { updateCustomerDbEntry } = customerStore;

const props = defineProps(['customerChanged']);
</script>

<style scoped>
.customer-record-header {
  background-color: var(--wbp-orange);
  width: 100%;
  padding: var(--container-padding);
  border-radius: var(--base-border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-container {
  display: flex;
  align-items: center;
  padding: var(--container-padding)
}

.input-container {
  justify-content: center;
  flex: 0.8;
}

input{
  background-color: rgba(0, 0, 0, 0.15);
  text-align: center;
}
</style>