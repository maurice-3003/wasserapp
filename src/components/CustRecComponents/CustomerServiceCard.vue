<template>
  <div class="card-container card-medium">
    <h2>Service</h2>
    <form autocomplete="off">
      <label for="cust-service-card-care-cycle">Pflegeintervall:</label>
      <input type="text" id="cust-service-card-care-cycle"
        name="care-cycle" v-model="currentCustomer.careCycle"
        @input="emitUpdate">

      <label for="cust-service-card-care-products">Bedarf:</label>
      <input type="text" id="cust-service-card-care-products"
        name="care-products" v-model="currentCustomer.requiredCareProducts"
        @input="emitUpdate">

      <label for="cust-service-card-notification">Benachrichtigung:</label>
      <input type="text" id="cust-service-card-notification"
        name="notification" v-model="currentCustomer.careNotification"
        @input="emitUpdate">

      <label for="cust-service-card-driving-distance">Fahrstrecke:</label>
      <input type="text" id="cust-service-card-driving-distance"
        name="driving-distance" v-model="currentCustomer.drivingDistance"
        @input="emitUpdate">

      <label for="cust-service-card-driving-time">Fahrzeit:</label>
      <input type="text" id="cust-service-card-driving-time"
        name="driving-time" v-model="currentCustomer.drivingTime"
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