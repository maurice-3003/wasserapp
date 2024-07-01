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
    return sortedCustomers.value.filter((c) => {
      return (
        c.nameID.toLowerCase().includes(nameQueryLower) &&
        c.streetAddress.toLowerCase().includes(streetQueryLower)
      );
    });
  });

  const originalCustomer = ref({});
  const customerChanged = computed(() => {
    // Implement a proper object comparison?
    return (
      JSON.stringify(currentCustomer.value) !==
      JSON.stringify(originalCustomer.value)
    );
  });
  function resetToOriginalCustomer() {
    if (
      originalCustomer.value !== null ||
      (undefined && currentIndex.value == !-1)
    ) {
      console.log('Resetting customer...');
      const index = customers.value.findIndex(
        (c) => c._id === currentCustomerId.value,
      );
      customers.value[index] = { ...originalCustomer.value };
    }
  }
  async function updateCustomerDbEntry() {
    try {
      await api.updateCustomerDetails(
        currentCustomerId.value,
        currentCustomer.value,
      );
      console.log('Update successful');
      originalCustomer.value = JSON.parse(
        JSON.stringify(currentCustomer.value),
      );
    } catch (error) {
      console.error(error);
    }
  }

  const currentCustomerId = ref(null);
  const currentCustomer = computed(() => {
    return sortedCustomers.value.find((c) => c._id === currentCustomerId.value);
  });
  const currentIndex = computed(() => {
    return sortedCustomers.value.findIndex(
      (c) => c._id === currentCustomerId.value,
    );
  });
  const hasPreviousCustomer = computed(() => {
    return currentIndex.value > 0;
  });
  const hasNextCustomer = computed(() => {
    return currentIndex.value < sortedCustomers.value.length - 1;
  });
  function goToCustomerById(id, router) {
    router.push({ name: 'Kundendetails', params: { id } });
  }
  function goToPreviousCustomer(router) {
    if (!hasPreviousCustomer) {
      return;
    }
    const previousCustomer = sortedCustomers.value[currentIndex.value - 1];
    router.push({
      name: 'Kundendetails',
      params: { id: previousCustomer._id },
    });
  }
  function goToNextCustomer(router) {
    if (!hasNextCustomer) {
      return;
    }
    const nextCustomer = sortedCustomers.value[currentIndex.value + 1];
    router.push({ name: 'Kundendetails', params: { id: nextCustomer._id } });
  }

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
    originalCustomer,
    customerChanged,
    goToPreviousCustomer,
    goToNextCustomer,
    goToCustomerById,
    resetToOriginalCustomer,
  };
});
