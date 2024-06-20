<template>
  <div class="customer-record-container">
    <CustomerRecordHeader
      :customerChanged="customerChanged"
      @updateDbEntry="updateCustomerDbEntry"
    />
    <CustomerAddressCard />
    <CustomerContactCard />
    <BedInfoCard />
    <CustomerPaymentInfoCard />
    <CustomerServiceCard />
    <CustomerNotes />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated } from 'vue';
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
const {
  currentCustomerId,
  currentCustomer,
  originalCustomer
 } = storeToRefs(customersStore);

const route = useRoute();
const id = ref(route.params.id);
currentCustomerId.value = id.value;
// const origCustomer = ref(JSON.parse(JSON.stringify(currentCustomer.value)));

onMounted(() => {
  originalCustomer.value = JSON.parse(JSON.stringify(currentCustomer.value));
});

const customerChanged = computed(() => {
  // Implement a proper object comparison?
  return JSON.stringify(currentCustomer.value) !==
    JSON.stringify(originalCustomer.value);
});
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
