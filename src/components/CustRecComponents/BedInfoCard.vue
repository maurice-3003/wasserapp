<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
</script>

<template>
  <div class="card-container card-medium">
    <h2>Bettinformationen</h2>
    <form autocomplete="off">
      <label for="bed-info-card-bed-type">Bett-Typ:</label>
      <input
        type="text"
        id="bed-info-card-bed-type"
        v-model="currentCustomer.bedType"
      />

      <label for="bed-info-card-bed-system">Bett-System:</label>
      <input
        type="text"
        id="bed-info-card-bed-system"
        v-model="currentCustomer.bedSystem"
      />

      <label for="bed-info-card-bed-size">Bett-Größe:</label>
      <input
        type="text"
        id="bed-info-card-bed-size"
        v-model="currentCustomer.bedSize"
      />

      <label for="bed-info-card-mattr-mfr">Matr.-Hersteller:</label>
      <input
        type="text"
        id="bed-info-card-mattr-mfr"
        v-model="currentCustomer.mattressManufacturer"
      />

      <label for="bed-info-card-mattr-system">Matr.-System:</label>
      <input
        type="text"
        id="bed-info-card-mattr-system"
        v-model="currentCustomer.mattressSystem"
      />

      <label for="bed-info-card-mattr-topper">Matr.-Auflage:</label>
      <input
        type="text"
        id="bed-info-card-mattr-topper"
        v-model="currentCustomer.mattressTopper"
      />

      <label for="bed-info-card-care-cycle">Pflegeintervall:</label>
      <input
        type="text"
        id="bed-info-card-care-cycle"
        v-model="currentCustomer.careCycle"
      />

      <label for="bed-info-card-buy-date">Kaufdatum:</label>
      <input
        type="text"
        id="bed-info-card-buy-date"
        v-model="currentCustomer.dateBedPurchased"
      />
    </form>
  </div>
</template>
