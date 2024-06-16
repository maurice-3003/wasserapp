<template>
  <div class="card-container card-medium">
    <h2>Bemerkungen</h2>
    <label for="cust-service-card-notes">Bemerkungen:</label>
    <textarea id="cust-service-card-notes" v-model="localCustomer.notes"
      @input="emitUpdate"></textarea>
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
  emits('update', { updatedCustomer: localCustomer.value});
}
</script>

<style scoped>
@import url('@/assets/cards.css');
label {
  visibility: hidden;
}
</style>