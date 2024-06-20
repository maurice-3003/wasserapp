<template>
  <div class="card-container card-medium">
    <h2>Bettinformationen</h2>
    <form autocomplete="off">
      <label for="bed-info-card-bed-type">Bett-Typ:</label>
      <input type="text" id="bed-info-card-bed-type" name="bed-type"
        v-model="currentCustomer.bedType" @input="emitUpdate">

      <label for="bed-info-card-bed-system">Bett-System:</label>
      <input type="text" id="bed-info-card-bed-system" name="bed-system"
        v-model="currentCustomer.bedSystem" @input="emitUpdate">

      <label for="bed-info-card-bed-size">Bett-Größe:</label>
      <input type="text" id="bed-info-card-bed-size" name="bed-size"
        v-model="currentCustomer.bedSize" @input="emitUpdate">

      <label for="bed-info-card-mattr-mfr">Matr.-Hersteller:</label>
      <input type="text" id="bed-info-card-mattr-mfr" name="mattres-mfr"
        v-model="currentCustomer.mattressManufacturer" @input="emitUpdate">

      <label for="bed-info-card-mattr-system">Matr.-System:</label>
      <input type="text" id="bed-info-card-mattr-system" name="mattres-system"
        v-model="currentCustomer.mattressSystem" @input="emitUpdate">

      <label for="bed-info-card-mattr-topper">Matr.-Auflage:</label>
      <input type="text" id="bed-info-card-mattr-topper" name="mattres-topper"
        v-model="currentCustomer.mattressTopper" @input="emitUpdate">

      <label for="bed-info-card-care-cycle">Pflegeintervall:</label>
      <input type="text" id="bed-info-card-care-cycle" name="care-cycle"
        v-model="currentCustomer.careCycle" @input="emitUpdate">

      <label for="bed-info-card-buy-date">Kaufdatum:</label>
      <input type="text" id="bed-info-card-buy-date" name="bed-purchase-date"
        v-model="currentCustomer.dateBedPurchased" @input="emitUpdate">
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