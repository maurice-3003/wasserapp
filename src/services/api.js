import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getCustomers() {
    return apiClient.get('/customers');
  },
  getCustomerDetails(id) {
    return apiClient.get(`/customers/${id}`);
  },
  updateCustomerDetails(id, customer) {
    return apiClient.put(`/customers/${id}`, customer);
  },
};
