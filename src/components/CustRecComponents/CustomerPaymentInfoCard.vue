<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
</script>

<template>
  <div class="card-container card-medium">
    <h2>Bankverbindung</h2>
    <form autocomplete="off">
      <label for="cust-pay-info-card-bank-name">Bank:</label>
      <input type="text" id="cust-pay-info-card-bank-name"
        v-model="currentCustomer.bankName">

      <label for="cust-pay-info-card-bank-acc-no">Kontonummer:</label>
      <input type="text" id="cust-pay-info-card-bank-acc-no"
        v-model="currentCustomer.bankAccountNo">

      <label for="cust-pay-info-card-bank-sort-code">Bankleitzahl:</label>
      <input type="text" id="cust-pay-info-card-bank-sort-code"
        v-model="currentCustomer.bankSortCode">

      <label for="cust-pay-info-card-iban">IBAN:</label>
      <input type="text" id="cust-pay-info-card-iban"
        v-model="currentCustomer.iban">

      <label for="cust-pay-info-card-bic">BIC:</label>
      <input type="text" id="cust-pay-info-card-bic"
        v-model="currentCustomer.bankIdentifierCode">

      <label for="cust-pay-info-card-direct-debit">Lastschrift:</label>
      <input type="text" id="cust-pay-info-card-direct-debit"
        v-model="currentCustomer.directDebit">
    </form>
  </div>
</template>

<style scoped>
</style>