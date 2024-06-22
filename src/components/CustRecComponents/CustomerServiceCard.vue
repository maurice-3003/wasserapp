<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
</script>

<template>
  <div class="card-container card-medium">
    <h2>Service</h2>
    <form autocomplete="off">
      <label for="cust-service-card-care-cycle">Pflegeintervall:</label>
      <input type="text" id="cust-service-card-care-cycle"
        v-model="currentCustomer.careCycle">

      <label for="cust-service-card-care-products">Bedarf:</label>
      <input type="text" id="cust-service-card-care-products"
        v-model="currentCustomer.requiredCareProducts">

      <label for="cust-service-card-notification">Benachrichtigung:</label>
      <input type="text" id="cust-service-card-notification"
        v-model="currentCustomer.careNotification">

      <label for="cust-service-card-driving-distance">Fahrstrecke:</label>
      <input type="text" id="cust-service-card-driving-distance"
        v-model="currentCustomer.drivingDistance">

      <label for="cust-service-card-driving-time">Fahrzeit:</label>
      <input type="text" id="cust-service-card-driving-time"
        v-model="currentCustomer.drivingTime">
    </form>
  </div>
</template>

<style scoped>
</style>