<template>
  <LoadingAnimation v-if="isLoading" />
  <div v-else class="customer-record-container">
    <CustomerRecordHeader
      :customer="customer"
      :customerChanged="customerChanged"
      @update="updateCustomerValue"
      @updateDbEntry="updateCustomerDbEntry"
    />
    <CustomerAddressCard
      :customer="customer"
      @update="updateCustomerValue"
    />
    <CustomerContactCard
      :customer="customer"
      @update="updateCustomerValue"
    />
    <BedInfoCard
      :customer="customer"
      @update="updateCustomerValue"
    />
    <CustomerPaymentInfoCard
      :customer="customer"
      @update="updateCustomerValue"
    />
    <CustomerServiceCard
      :customer="customer"
      @update="updateCustomerValue"
    />
    <CustomerNotes
      :customer="customer"
      @update="updateCustomerValue"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/services/api';
import LoadingAnimation from '@/components/LoadingAnimation.vue';
import CustomerAddressCard from '@/components/CustRecComponents/CustomerAddressCard.vue';
import CustomerContactCard from '@/components/CustRecComponents/CustomerContactCard.vue';
import BedInfoCard from '@/components/CustRecComponents/BedInfoCard.vue';
import CustomerPaymentInfoCard from '@/components/CustRecComponents/CustomerPaymentInfoCard.vue';
import CustomerRecordHeader from '@/components/CustRecComponents/CustomerRecordHeader.vue';
import CustomerServiceCard from '@/components/CustRecComponents/CustomerServiceCard.vue';
import CustomerNotes from '@/components/CustRecComponents/CustomerNotes.vue';

const route = useRoute();
const id = ref(route.params.id);
const customer = ref({});
const origCustomer = ref({});
const isLoading = ref(true);

onMounted (async () => {
  try {
    const response = await api.getCustomerDetails(id.value);
    customer.value = response.data;
    origCustomer.value = JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  } finally {
  isLoading.value = false;
  }
});

const customerChanged = computed(() => {
  return JSON.stringify(customer.value) !== JSON.stringify(origCustomer.value);
})

function updateCustomerValue(e) {
  customer.value = { ...e.updatedCustomer };
}

async function updateCustomerDbEntry() {
  try {
    await api.updateCustomerDetails(id.value, customer.value);
    console.log('Update successful');
    origCustomer.value = JSON.parse(JSON.stringify(customer.value));
  } catch (error) {
    console.error(error);
  }
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
