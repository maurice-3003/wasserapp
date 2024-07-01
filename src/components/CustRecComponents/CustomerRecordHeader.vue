<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const customerStore = useCustomersStore();

const {
  currentCustomer,
  hasPreviousCustomer,
  hasNextCustomer,
  customerChanged,
} = storeToRefs(customerStore);

const { updateCustomerDbEntry, goToPreviousCustomer, goToNextCustomer } =
  customerStore;

const router = useRouter();
</script>

<template>
  <div class="customer-record-header">
    <div>
      <button
        @click="goToPreviousCustomer(router)"
        :disabled="!hasPreviousCustomer"
      >
        <<<<
      </button>
    </div>
    <div class="input-container">
      <input
        type="text"
        id="cust-header-card-name-id"
        v-model="currentCustomer.nameID"
        required
      />
    </div>
    <div>
      <button @click="goToNextCustomer(router)" :disabled="!hasNextCustomer">
        >>>>
      </button>
    </div>
    <div class="button-container" v-if="customerChanged">
      <button @click="updateCustomerDbEntry">Änderungen speichern</button>
    </div>
  </div>
</template>

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
  padding: var(--container-padding);
}

.input-container {
  justify-content: center;
  flex: 0.8;
}

input {
  background-color: rgba(0, 0, 0, 0.15);
  text-align: center;
  display: block;
  width: 100%;
  height: 1.5em;
  font-size: var(--base-font-size);
  border: none;
  border-radius: 0.3em;
  padding: 0.2em;
}
</style>
