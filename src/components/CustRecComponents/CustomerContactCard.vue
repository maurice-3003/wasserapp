<template>
  <div class="card-container card-medium">
    <h2>Kontaktdaten</h2>
    <form autocomplete="off">
      <label for="cust-contact-card-mobile-no">Telefon Mobil:</label>
      <input type="text" id="cust-contact-card-mobile-no"
        name="phone-mobile" v-model="localCustomer.phoneNoMobile"
        @input="emitUpdate">

      <label for="cust-contact-card-landline-no">Telefon Festnetz:</label>
      <input type="text" id="cust-contact-card-landline-no"
        name="phone-landline" v-model="localCustomer.phoneNoLandline"
        @input="emitUpdate">

      <label for="cust-contact-card-business-no">Telefon geschäftlich:</label>
      <input type="text" id="cust-contact-card-business-no"
        name="phone-business" v-model="localCustomer.phoneNoBusiness"
        @input="emitUpdate">

      <label for="cust-contact-card-fax-no">Fax:</label>
      <input type="text" id="cust-contact-card-fax-no"
        name="fax-no" v-model="localCustomer.faxNo"  @input="emitUpdate">

      <label for="cust-contact-card-email">E-Mail:</label>
      <input type="text" id="cust-contact-card-email"
        name="email" v-model="localCustomer.email"  @input="emitUpdate">
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
  emits('update', { updatedCustomer: localCustomer.value});
}

</script>

<style scoped>
@import url('@/assets/cards.css');
</style>