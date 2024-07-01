<script setup>
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customerStore = useCustomersStore();
const { currentCustomer } = storeToRefs(customerStore);
</script>

<template>
  <div class="card-container card-medium">
    <h2>Kontaktdaten</h2>
    <form autocomplete="off">
      <label for="cust-contact-card-mobile-no">Telefon Mobil:</label>
      <input
        type="text"
        id="cust-contact-card-mobile-no"
        v-model="currentCustomer.phoneNoMobile"
      />

      <label for="cust-contact-card-landline-no">Telefon Festnetz:</label>
      <input
        type="text"
        id="cust-contact-card-landline-no"
        v-model="currentCustomer.phoneNoLandline"
      />

      <label for="cust-contact-card-business-no">Telefon geschäftlich:</label>
      <input
        type="text"
        id="cust-contact-card-business-no"
        v-model="currentCustomer.phoneNoBusiness"
      />

      <label for="cust-contact-card-fax-no">Fax:</label>
      <input
        type="text"
        id="cust-contact-card-fax-no"
        v-model="currentCustomer.faxNo"
      />

      <label for="cust-contact-card-email">E-Mail:</label>
      <input
        type="text"
        id="cust-contact-card-email"
        v-model="currentCustomer.email"
      />
    </form>
  </div>
</template>
