<template>
  <div class="card-container card-medium">
    <h2>Service</h2>
    <form autocomplete="off">
      <label for="cust-service-card-care-cycle">Pflegeintervall:</label>
      <input type="text" id="cust-service-card-care-cycle"
        name="care-cycle" v-model="localCustomer.careCycle"
        @input="emitUpdate">

      <label for="cust-service-card-care-products">Bedarf:</label>
      <input type="text" id="cust-service-card-care-products"
        name="care-products" v-model="localCustomer.requiredCareProducts"
        @input="emitUpdate">

      <label for="cust-service-card-notification">Benachrichtigung:</label>
      <input type="text" id="cust-service-card-notification"
        name="notification" v-model="localCustomer.careNotification"
        @input="emitUpdate">

      <label for="cust-service-card-driving-distance">Fahrstrecke:</label>
      <input type="text" id="cust-service-card-driving-distance"
        name="driving-distance" v-model="localCustomer.drivingDistance"
        @input="emitUpdate">

      <label for="cust-service-card-driving-time">Fahrzeit:</label>
      <input type="text" id="cust-service-card-driving-time"
        name="driving-time" v-model="localCustomer.drivingTime"
        @input="emitUpdate">
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['customer']);
const emits = defineEmits(['update']);

const localCustomer = ref({ ...props.customer });

watch(() => props.customer, (updatedCustomer) => {
  localCustomer.value = updatedCustomer;
});

function emitUpdate() {
  emits('update', { updatedCustomer: localCustomer.value });
}
</script>

<style scoped>
@import url('@/assets/cards.css');
</style>