<template>
  <div class="customer-record-container">
    <CustomerRecordHeader
      :customer="currentCustomer"
      :customerChanged="customerChanged"
      @update="updateCustomerValue"
      @updateDbEntry="updateCustomerDbEntry"
    />
    <CustomerAddressCard
      :customer="currentCustomer"
      @update="updateCustomerValue"
    />
    <CustomerContactCard
      :customer="currentCustomer"
      @update="updateCustomerValue"
    />
    <BedInfoCard
      :customer="currentCustomer"
      @update="updateCustomerValue"
    />
    <CustomerPaymentInfoCard
      :customer="currentCustomer"
      @update="updateCustomerValue"
    />
    <CustomerServiceCard
      :customer="currentCustomer"
      @update="updateCustomerValue"
    />
    <CustomerNotes
      :customer="currentCustomer"
      @update="updateCustomerValue"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCustomersStore } from '@/stores/CustomersStore';
import CustomerAddressCard from '@/components/CustRecComponents/CustomerAddressCard.vue';
import CustomerContactCard from '@/components/CustRecComponents/CustomerContactCard.vue';
import BedInfoCard from '@/components/CustRecComponents/BedInfoCard.vue';
import CustomerPaymentInfoCard from '@/components/CustRecComponents/CustomerPaymentInfoCard.vue';
import CustomerRecordHeader from '@/components/CustRecComponents/CustomerRecordHeader.vue';
import CustomerServiceCard from '@/components/CustRecComponents/CustomerServiceCard.vue';
import CustomerNotes from '@/components/CustRecComponents/CustomerNotes.vue';
import { storeToRefs } from 'pinia';

const customersStore = useCustomersStore();
const { updateCustomerDbEntry } = customersStore;
const { currentCustomerId, currentCustomer } = storeToRefs(customersStore);

const route = useRoute();
const id = ref(route.params.id);
currentCustomerId.value = id.value;
const origCustomer = ref(JSON.parse(JSON.stringify(currentCustomer.value)));

onMounted(() => {
  origCustomer.value = JSON.parse(JSON.stringify(currentCustomer.value));
});

const customerChanged = computed(() => {
  // Implement a proper object comparison?
  return JSON.stringify(currentCustomer.value) !==
    JSON.stringify(origCustomer.value);
});

console.log('current: ', currentCustomer.value);
console.log('orig: ', origCustomer.value);

function updateCustomerValue(e) {
  currentCustomer.value = { ...e.updatedCustomer };
}

</script>

<style scoped>
.customer-record-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  row-gap: var(--container-margin);
  column-gap: var(--container-margin);
  overflow: auto;
}
</style>
