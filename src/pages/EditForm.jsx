import React, { useState } from 'react';
import axios from 'axios';
import './editForm.css';

function EditForm({ product, onSave }) {
  // Maintain a local copy of product for editing
  const [localProduct, setLocalProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Send PUT request to update the product on the server
      await axios.put(`https://e-back-3rj7.vercel.app/products/${localProduct.id}`, localProduct);
      console.log('Product updated:', localProduct);
      // Call onSave to notify parent component
      onSave(localProduct);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={localProduct.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={localProduct.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={localProduct.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={localProduct.quantity}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default EditForm;
