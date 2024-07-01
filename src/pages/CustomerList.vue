<script setup>
import { useRouter } from 'vue-router';
import { useCustomersStore } from '@/stores/CustomersStore';
import { storeToRefs } from 'pinia';

const customersStore = useCustomersStore();

const { nameQuery, streetQuery, filteredCustomers } =
  storeToRefs(customersStore);

const { goToCustomerById } = customersStore;

const router = useRouter();
</script>

<template>
  <div class="customers-container">
    <table>
      <thead>
        <tr>
          <th>
            <div class="filterbox-container">
              <input type="text" v-model="nameQuery" placeholder="Name" />
            </div>
          </th>
          <th>
            <div class="filterbox-container">
              <input type="text" v-model="streetQuery" placeholder="Straße" />
            </div>
          </th>
          <th>PLZ</th>
          <th>Ort</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in filteredCustomers"
          :key="customer._id"
          @click="goToCustomerById(customer._id, router)"
        >
          <td>{{ customer.nameID }}</td>
          <td>{{ customer.streetAddress }}</td>
          <td>{{ customer.zipCode }}</td>
          <td>{{ customer.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.customers-container {
  border-radius: var(--base-border-radius);
  overflow: auto;
  flex: 1;
}

table {
  border: none;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
}

th,
td {
  word-wrap: break-word;
  text-align: left;
}

thead {
  position: sticky;
  top: 0;
}

th {
  background-color: #888888;
  color: white;
  padding: 0.4em;
  top: 0;
  border-right: 1px solid white;
}

th:last-child {
  border-right: none;
}

td {
  padding: 0.2em 0.4em;
  cursor: pointer;
}

tr {
  z-index: -1;
}
tr:nth-child(odd) {
  background-color: lightgray;
}

.filterbox-container {
  display: inline-flex;
  align-items: center;
}
</style>
