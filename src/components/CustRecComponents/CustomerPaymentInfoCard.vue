<template>
  <div class="card-container card-medium">
    <h2>Bankverbindung</h2>
    <form autocomplete="off">
      <label for="cust-pay-info-card-bank-name">Bank:</label>
      <input type="text" id="cust-pay-info-card-bank-name"
        name="bank-name" v-model="currentCustomer.bankName"
        @input="emitUpdate">

      <label for="cust-pay-info-card-bank-acc-no">Kontonummer:</label>
      <input type="text" id="cust-pay-info-card-bank-acc-no"
        name="bank-acc-no" v-model="currentCustomer.bankAccountNo"
        @input="emitUpdate">

      <label for="cust-pay-info-card-bank-sort-code">Bankleitzahl:</label>
      <input type="text" id="cust-pay-info-card-bank-sort-code"
        name="bank-sort-code" v-model="currentCustomer.bankSortCode"
        @input="emitUpdate">

      <label for="cust-pay-info-card-iban">IBAN:</label>
      <input type="text" id="cust-pay-info-card-iban"
        name="iban" v-model="currentCustomer.iban"
        @input="emitUpdate">

      <label for="cust-pay-info-card-bic">BIC:</label>
      <input type="text" id="cust-pay-info-card-bic"
        name="bic" v-model="currentCustomer.bankIdentifierCode"
        @input="emitUpdate">

      <label for="cust-pay-info-card-direct-debit">Lastschrift:</label>
      <input type="text" id="cust-pay-info-card-direct-debit"
        name="direct-debit" v-model="currentCustomer.directDebit"
        @input="emitUpdate">
    </form>
  </div>
</template>

<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
</script>

<style scoped>
@import url('@/assets/cards.css');
</style>