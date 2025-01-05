import axios from 'axios';

const API_URL = 'http://localhost:8000/api/customers'; // Adjust this based on your backend URL

export const getCustomers = () => axios.get(API_URL);
export const getCustomer = (id: any) => axios.get(`${API_URL}/${id}`);
export const createCustomer = (data: any) => axios.post(API_URL, data);
export const updateCustomer = (id: any, data: any) => axios.put(`${API_URL}/${id}`, data);
export const deleteCustomer = (id: any) => axios.delete(`${API_URL}/${id}`);
