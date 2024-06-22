<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
</script>

<template>
  <div class="card-container card-medium">
    <h2>Anschrift</h2>
    <form autocomplete="off">
      <label for="cust-addr-card-salutation">Anrede:</label>
      <input type="text" id="cust-addr-card-salutation"
        v-model="currentCustomer.salutation">

      <label for="cust-addr-card-fullname">Vor- und Nachname:</label>
      <input type="text" id="cust-addr-card-fullname" required
        v-model="currentCustomer.fullName">

      <label for="cust-addr-card-addrsupplement">Adresszusatz:</label>
      <input type="text" id="cust-addr-card-addrsupplement"
        v-model="currentCustomer.addressSupplement">

      <label for="cust-addr-card-streetaddress">Straße, Hausnummer:</label>
      <input type="text" id="cust-addr-card-streetaddress"
        v-model="currentCustomer.streetAddress">

      <label for="cust-addr-card-zipcode">Postleitzahl:</label>
      <input type="text" id="cust-addr-card-zipcode"
        v-model="currentCustomer.zipCode">

      <label for="cust-addr-card-city">Ort:</label>
      <input type="text" id="cust-addr-card-city"
        v-model="currentCustomer.city">

      <label for="cust-addr-card-greeting">Grußformel:</label>
      <input type="text" id="cust-addr-card-greeting"
        v-model="currentCustomer.greeting">
    </form>
  </div>
</template>