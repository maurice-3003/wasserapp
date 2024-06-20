<template>
  <div class="customer-record-header">
    <div>
      <button
        @click="goToPreviousCustomer"
        :disabled="!hasPreviousCustomer"
        ><<<<</button>
    </div>
    <div class="input-container">
      <input type="text" id="cust-header-card-name-id"
        v-model="currentCustomer.nameID" required>
    </div>
    <div>
      <button
        @click="goToNextCustomer"
        :disabled="!hasNextCustomer"
        >>>>></button>
    </div>
    <div class="button-container" v-if="customerChanged">
      <button
        @click="updateCustomerDbEntry"
        >Änderungen speichern</button>
    </div>
  </div>
</template>

<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const customerStore = useCustomersStore();
const {
  currentCustomer,
  hasPreviousCustomer,
  hasNextCustomer,
  sortedCustomers,
  currentIndex,
  currentCustomerId,
  originalCustomer
} = storeToRefs(customerStore);
const { updateCustomerDbEntry } = customerStore;

const router = useRouter();

const props = defineProps(['customerChanged']);

function goToNextCustomer() {
  const nextCustomer = sortedCustomers.value[currentIndex.value + 1];
  currentCustomerId.value = nextCustomer._id;
  originalCustomer.value = JSON.parse(JSON.stringify(nextCustomer));
  //router.push({ name: 'Kundendetails', params: { id: nextCustomer._id } });
}

function goToPreviousCustomer() {
  const previousCustomer = sortedCustomers.value[currentIndex.value - 1];
  currentCustomerId.value = previousCustomer._id;
  originalCustomer.value = JSON.parse(JSON.stringify(previousCustomer));
  //router.push({ name: 'Kundendetails', params: { id: previousCustomer._id } });
}
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