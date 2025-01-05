import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCustomer } from '../services/api';

interface Customer {
  first_name: string;
  last_name: string;
  email: string;
  contact_number: string;
}

const AddCustomer: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>({
    first_name: '',
    last_name: '',
    email: '',
    contact_number: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await createCustomer(customer);
      navigate('/');
    } catch (error) {
      console.error('Failed to add customer:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            value={customer.first_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            value={customer.last_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact_number">Contact Number</label>
          <input
            id="contact_number"
            type="text"
            name="contact_number"
            value={customer.contact_number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
