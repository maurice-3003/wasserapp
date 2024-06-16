<template>
  <LoadingAnimation v-if="isLoading" />
  <div v-else class="customers-container">
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
        <tr v-for="customer in filteredCustomers" :key="customer._id"
          @click="goToCustomerById(customer._id)">
          <td>{{ customer.nameID }}</td>
          <td>{{ customer.streetAddress }}</td>
          <td>{{ customer.zipCode }}</td>
          <td>{{ customer.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import api from '@/services/api';
import { useRouter } from 'vue-router';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

const router = useRouter();
const customers = ref([]);
const nameQuery = ref('');
const streetQuery = ref('');
const isLoading = ref(true);

onMounted (async () => {
  try {
    const response = await api.getCustomers();
    customers.value = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

const sortedCustomers = computed(() => {
  return customers.value.toSorted((a, b) => {
    return a.nameID.localeCompare(b.nameID);
  });
});

const filteredCustomers = computed(() => {
  if (!nameQuery.value.trim() && !streetQuery.value.trim()) {
    return sortedCustomers.value;
  }
  const nameQueryLower = nameQuery.value.toLowerCase();
  const streetQueryLower = streetQuery.value.toLowerCase();
  return sortedCustomers.value.filter(customer => {
    return customer.nameID.toLowerCase().includes(nameQueryLower) &&
      customer.streetAddress.toLowerCase().includes(streetQueryLower);
  });
});

const goToCustomerById = (id) => {
  router.push({
    name: 'Kundendetails',
    params: { id },
  });
};
</script>

<style scoped>
LoadingAnimation {
  justify-self: center;
}

.customers-container {
  border-radius: var(--base-border-radius);
  overflow: auto;
}

table {
  border: none;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

th, td {
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