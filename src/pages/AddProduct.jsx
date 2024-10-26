import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addProduct.css';

function AddProduct() {
  const navigate = useNavigate();

  // State for product details
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Send a POST request to add a new product
      await axios.post('https://e-back-3rj7.vercel.app/products', product);
      console.log('Product added:', product);
      // Navigate back to Home page after saving
      navigate('/');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleCancel = () => {
    // Navigate back to Home without saving
    navigate('/');
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default AddProduct;
