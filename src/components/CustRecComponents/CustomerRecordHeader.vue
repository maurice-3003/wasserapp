<template>
  <div class="customer-record-header">
    <div class="input-container">
      <input type="text" id="cust-header-card-name-id"
        v-model="localCustomer.nameID" @input="emitUpdate" required>
    </div>
    <div class="button-container" v-if="customerChanged">
      <button @click="emitUpdateDbEntry">Änderungen speichern</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['customer', 'customerChanged']);
const emits = defineEmits(['update', 'updateDbEntry']);

const localCustomer = ref({ ...props.customer });

watch(() => props.customer, (updatedCustomer) => {
  localCustomer.value = { ...updatedCustomer };
});

function emitUpdate() {
  emits('update', { updatedCustomer: localCustomer.value});
}

function emitUpdateDbEntry() {
  emits('updateDbEntry');
}
</script>

<style scoped>
.customer-record-header {
  background-color: var(--wbp-orange);
  width: 100%;
  padding: var(--container-padding);
  border-radius: var(--base-border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-container {
  display: flex;
  align-items: center;
  padding: var(--container-padding)
}

.input-container {
  justify-content: center;
  flex: 0.8;
}

input{
  background-color: rgba(0, 0, 0, 0.15);
  text-align: center;
}
</style>