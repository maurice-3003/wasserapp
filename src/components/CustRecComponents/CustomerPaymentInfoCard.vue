<template>
  <div class="card-container card-medium">
    <h2>Bankverbindung</h2>
    <form autocomplete="off">
      <label for="cust-pay-info-card-bank-name">Bank:</label>
      <input type="text" id="cust-pay-info-card-bank-name"
        name="bank-name" v-model="localCustomer.bankName"
        @input="emitUpdate">

      <label for="cust-pay-info-card-bank-acc-no">Kontonummer:</label>
      <input type="text" id="cust-pay-info-card-bank-acc-no"
        name="bank-acc-no" v-model="localCustomer.bankAccountNo"
        @input="emitUpdate">

      <label for="cust-pay-info-card-bank-sort-code">Bankleitzahl:</label>
      <input type="text" id="cust-pay-info-card-bank-sort-code"
        name="bank-sort-code" v-model="localCustomer.bankSortCode"
        @input="emitUpdate">

      <label for="cust-pay-info-card-iban">IBAN:</label>
      <input type="text" id="cust-pay-info-card-iban"
        name="iban" v-model="localCustomer.iban"
        @input="emitUpdate">

      <label for="cust-pay-info-card-bic">BIC:</label>
      <input type="text" id="cust-pay-info-card-bic"
        name="bic" v-model="localCustomer.bankIdentifierCode"
        @input="emitUpdate">

      <label for="cust-pay-info-card-direct-debit">Lastschrift:</label>
      <input type="text" id="cust-pay-info-card-direct-debit"
        name="direct-debit" v-model="localCustomer.directDebit"
        @input="emitUpdate">
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['customer']);
const emits = defineEmits(['emitUpdate']);

const localCustomer = ref({ ...props.customer });

watch(() => props.customer, (updatedCustomer) => {
  localCustomer.value = updatedCustomer;
})

function emitUpdate() {
  emits('emitUpdate', { updatedCustomer: localCustomer.value });
}

</script>

<style scoped>
@import url('@/assets/cards.css');
</style>