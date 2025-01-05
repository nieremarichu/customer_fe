import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteCustomer, getCustomers } from '../services/api';

interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  contact_number: string;
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const response = await getCustomers();
    setCustomers(response.data);
  };

  const handleDelete = async (id: number) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Customer List</h1>
      <Link
        to="/add"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Customer
      </Link>
      <div className="mt-4">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">First Name</th>
              <th className="border border-gray-200 px-4 py-2">Last Name</th>
              <th className="border border-gray-200 px-4 py-2">Email</th>
              <th className="border border-gray-200 px-4 py-2">Contact Number</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="text-center">
                <td className="border border-gray-200 px-4 py-2">{customer.first_name}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.last_name}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.email}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.contact_number}</td>
                <td className="border border-gray-200 px-4 py-2 space-x-2">
                  <Link
                    to={`/view/${customer.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                  <Link
                    to={`/update/${customer.id}`}
                    className="text-yellow-500 hover:underline"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(customer.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
