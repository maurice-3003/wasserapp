import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import api from '@/services/api';

export const useCustomersStore = defineStore('customers', () => {
  
  const customers = ref([]);
  const customersLoading = ref(Boolean);
  async function loadCustomers() {
    try {
      customersLoading.value = true;
      const response = await api.getCustomers();
      customers.value = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      customersLoading.value = false;
    }
  }

  const sortedCustomers = computed(() => {
    return customers.value.toSorted((a, b) => {
      return a.nameID.localeCompare(b.nameID);
    });
  });

  const nameQuery = ref('');
  const streetQuery = ref('');
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

  return {
    customers,
    customersLoading,
    loadCustomers,
    sortedCustomers,
    nameQuery,
    streetQuery,
    filteredCustomers
  };
});