<script setup>
import { watch } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';
import CustomerAddressCard from '@/components/CustRecComponents/CustomerAddressCard.vue';
import CustomerContactCard from '@/components/CustRecComponents/CustomerContactCard.vue';
import BedInfoCard from '@/components/CustRecComponents/BedInfoCard.vue';
import CustomerPaymentInfoCard from '@/components/CustRecComponents/CustomerPaymentInfoCard.vue';
import CustomerRecordHeader from '@/components/CustRecComponents/CustomerRecordHeader.vue';
import CustomerServiceCard from '@/components/CustRecComponents/CustomerServiceCard.vue';
import CustomerNotes from '@/components/CustRecComponents/CustomerNotes.vue';

const customersStore = useCustomersStore();
const {
  currentCustomerId,
  originalCustomer,
  currentCustomer,
  customerChanged,
} = storeToRefs(customersStore);
const { updateCustomerDbEntry, resetToOriginalCustomer } = customersStore;

const route = useRoute();
currentCustomerId.value = route.params.id;
originalCustomer.value = JSON.parse(JSON.stringify(currentCustomer.value));

watch(route, () => {
  currentCustomerId.value = route.params.id;
  originalCustomer.value = JSON.parse(JSON.stringify(currentCustomer.value));
});

onBeforeRouteLeave(() => {
  if (customerChanged.value) {
    const confirmMessage = 'Leave: Änderungen speichern?';
    if (confirm(confirmMessage)) {
      //updateCustomerDbEntry();
    } else {
      resetToOriginalCustomer();
      return false;
    }
  }
});

onBeforeRouteUpdate(() => {
  if (customerChanged.value) {
    const confirmMessage = 'Update: Änderungen speichern?';
    if (confirm(confirmMessage)) {
      //updateCustomerDbEntry();
    } else {
      resetToOriginalCustomer();
      return false;
    }
  }
});
</script>

<template>
  <div class="customer-record-container">
    <CustomerRecordHeader />
    <CustomerAddressCard />
    <CustomerContactCard />
    <BedInfoCard />
    <CustomerPaymentInfoCard />
    <CustomerServiceCard />
    <CustomerNotes />
  </div>
</template>

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
