<template>
  <div class="card-container card-medium">
    <h2>Anschrift</h2>
    <form autocomplete="off">
      <label for="cust-addr-card-salutation">Anrede:</label>
      <input type="text" id="cust-addr-card-salutation" name="salutation"
        required v-model="localCustomer.salutation" @input="emitUpdate">

      <label for="cust-addr-card-fullname">Vor- und Nachname:</label>
      <input type="text" id="cust-addr-card-fullname" name="fullname"
        required v-model="localCustomer.fullName" @input="emitUpdate">

      <label for="cust-addr-card-addrsupplement">Adresszusatz:</label>
      <input type="text" id="cust-addr-card-addrsupplement"
        name="address-supplement" v-model="localCustomer.addressSupplement"
        @input="emitUpdate">

      <label for="cust-addr-card-streetaddress">Straße, Hausnummer:</label>
      <input type="text" id="cust-addr-card-streetaddress" name="street-address"
        required v-model="localCustomer.streetAddress" @input="emitUpdate">

      <label for="cust-addr-card-zipcode">Postleitzahl:</label>
      <input type="text" id="cust-addr-card-zipcode" name="zipcode"
        required v-model="localCustomer.zipCode" @input="emitUpdate">

      <label for="cust-addr-card-city">Ort:</label>
      <input type="text" id="cust-addr-card-city" name="city"
        required v-model="localCustomer.city" @input="emitUpdate">

      <label for="cust-addr-card-greeting">Grußformel:</label>
      <input type="text" id="cust-addr-card-greeting" name="greeting"
        required v-model="localCustomer.greeting" @input="emitUpdate">
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['customer']);
const emits = defineEmits(['update']);

const localCustomer = ref({ ...props.customer});

watch(() => props.customer, (updatedCustomer) => {
  localCustomer.value = updatedCustomer;
});

function emitUpdate() {
  emits('update', { updatedCustomer: localCustomer.value});
}
</script>

<style scoped>
@import url('@/assets/cards.css');
</style>