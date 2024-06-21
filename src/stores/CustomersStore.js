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
  async function updateCustomerDbEntry() {
    try {
      await api.updateCustomerDetails(currentCustomerId.value, currentCustomer.value);
      console.log('Update successful');
      originalCustomer.value = JSON.parse(JSON.stringify(currentCustomer.value));
    } catch (error) {
      console.error(error);
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
    return sortedCustomers.value.filter(c => {
      return c.nameID.toLowerCase().includes(nameQueryLower) &&
        c.streetAddress.toLowerCase().includes(streetQueryLower);
    });
  });

  const currentCustomerId = ref(null);
  const currentIndex = computed(() => {
    return sortedCustomers.value.findIndex(c => c._id === currentCustomerId.value);
  });
  const hasPreviousCustomer = computed(() => {
    return currentIndex.value > 0;
  });
  const hasNextCustomer = computed(() => {
    return currentIndex.value < sortedCustomers.value.length - 1;
  });
  const currentCustomer = computed(() => {
    return sortedCustomers.value.find(c => c._id === currentCustomerId.value);
  });
  const originalCustomer = ref({});

  return {
    customers,
    customersLoading,
    loadCustomers,
    updateCustomerDbEntry,
    sortedCustomers,
    nameQuery,
    streetQuery,
    filteredCustomers,
    currentCustomerId,
    currentIndex,
    hasPreviousCustomer,
    hasNextCustomer,
    currentCustomer,
    originalCustomer
  };
});