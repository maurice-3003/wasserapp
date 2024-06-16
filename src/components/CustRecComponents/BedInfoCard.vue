<template>
  <div class="card-container card-medium">
    <h2>Bettinformationen</h2>
    <form autocomplete="off">
      <label for="bed-info-card-bed-type">Bett-Typ:</label>
      <input type="text" id="bed-info-card-bed-type" name="bed-type"
        v-model="localCustomer.bedType" @input="emitUpdate">

      <label for="bed-info-card-bed-system">Bett-System:</label>
      <input type="text" id="bed-info-card-bed-system" name="bed-system"
        v-model="localCustomer.bedSystem" @input="emitUpdate">

      <label for="bed-info-card-bed-size">Bett-Größe:</label>
      <input type="text" id="bed-info-card-bed-size" name="bed-size"
        v-model="localCustomer.bedSize" @input="emitUpdate">

      <label for="bed-info-card-mattr-mfr">Matr.-Hersteller:</label>
      <input type="text" id="bed-info-card-mattr-mfr" name="mattres-mfr"
        v-model="localCustomer.mattressManufacturer" @input="emitUpdate">

      <label for="bed-info-card-mattr-system">Matr.-System:</label>
      <input type="text" id="bed-info-card-mattr-system" name="mattres-system"
        v-model="localCustomer.mattressSystem" @input="emitUpdate">

      <label for="bed-info-card-mattr-topper">Matr.-Auflage:</label>
      <input type="text" id="bed-info-card-mattr-topper" name="mattres-topper"
        v-model="localCustomer.mattressTopper" @input="emitUpdate">

      <label for="bed-info-card-care-cycle">Pflegeintervall:</label>
      <input type="text" id="bed-info-card-care-cycle" name="care-cycle"
        v-model="localCustomer.careCycle" @input="emitUpdate">

      <label for="bed-info-card-buy-date">Kaufdatum:</label>
      <input type="text" id="bed-info-card-buy-date" name="bed-purchase-date"
        v-model="localCustomer.dateBedPurchased" @input="emitUpdate">
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