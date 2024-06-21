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
      <input type="text" id="cust-addr-card-salutation" name="salutation"
        required v-model="currentCustomer.salutation" @input="emitUpdate">

      <label for="cust-addr-card-fullname">Vor- und Nachname:</label>
      <input type="text" id="cust-addr-card-fullname" name="fullname"
        required v-model="currentCustomer.fullName" @input="emitUpdate">

      <label for="cust-addr-card-addrsupplement">Adresszusatz:</label>
      <input type="text" id="cust-addr-card-addrsupplement"
        name="address-supplement" v-model="currentCustomer.addressSupplement"
        @input="emitUpdate">

      <label for="cust-addr-card-streetaddress">Straße, Hausnummer:</label>
      <input type="text" id="cust-addr-card-streetaddress" name="street-address"
        required v-model="currentCustomer.streetAddress" @input="emitUpdate">

      <label for="cust-addr-card-zipcode">Postleitzahl:</label>
      <input type="text" id="cust-addr-card-zipcode" name="zipcode"
        required v-model="currentCustomer.zipCode" @input="emitUpdate">

      <label for="cust-addr-card-city">Ort:</label>
      <input type="text" id="cust-addr-card-city" name="city"
        required v-model="currentCustomer.city" @input="emitUpdate">

      <label for="cust-addr-card-greeting">Grußformel:</label>
      <input type="text" id="cust-addr-card-greeting" name="greeting"
        required v-model="currentCustomer.greeting" @input="emitUpdate">
    </form>
  </div>
</template>

<style scoped>
</style>