<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
</script>

<template>
  <div class="card-container card-medium">
    <h2>Kontaktdaten</h2>
    <form autocomplete="off">
      <label for="cust-contact-card-mobile-no">Telefon Mobil:</label>
      <input type="text" id="cust-contact-card-mobile-no"
        name="phone-mobile" v-model="currentCustomer.phoneNoMobile"
        @input="emitUpdate">

      <label for="cust-contact-card-landline-no">Telefon Festnetz:</label>
      <input type="text" id="cust-contact-card-landline-no"
        name="phone-landline" v-model="currentCustomer.phoneNoLandline"
        @input="emitUpdate">

      <label for="cust-contact-card-business-no">Telefon geschäftlich:</label>
      <input type="text" id="cust-contact-card-business-no"
        name="phone-business" v-model="currentCustomer.phoneNoBusiness"
        @input="emitUpdate">

      <label for="cust-contact-card-fax-no">Fax:</label>
      <input type="text" id="cust-contact-card-fax-no"
        name="fax-no" v-model="currentCustomer.faxNo"  @input="emitUpdate">

      <label for="cust-contact-card-email">E-Mail:</label>
      <input type="text" id="cust-contact-card-email"
        name="email" v-model="currentCustomer.email"  @input="emitUpdate">
    </form>
  </div>
</template>

<style scoped>
</style>