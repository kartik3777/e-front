import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './productDetail.css';
import EditForm from './EditForm';

function ProductDetail() {
  const { id } = useParams(); // Get product id from URL params
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details by id
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://e-back-3rj7.vercel.app/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError("Error fetching product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    // Cleanup function if needed
    return () => {
      setProduct(null); // Optional: Clean up state
    };
  }, [id]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = (newData) => {
    setProduct(newData);
    setIsEditing(false); // Hide edit form after saving
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`https://e-back-3rj7.vercel.app/products/${id}`);
        alert('Product deleted successfully.');
        navigate('/'); // Navigate back after deletion
      } catch (error) {
        setError("Error deleting product. Please try again later.");
      }
    }
  };

  if (loading) return <div>Loading...</div>; // Show loading message if product is not yet loaded
  if (error) return <div>{error}</div>; // Show error message if an error occurred

  return (
    <div className="product-detail">
      <h2>{product.name}</h2> 
      <p>{product.description}</p>
      <p style={{ color: "#37274fbe" }}>Price: ${product.price}</p>
      <p>Available Quantity: {product.quantity}</p>
      
      <button className="edit-button" onClick={handleEditToggle}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
     

      {/* Render the edit form if isEditing is true */}
      {isEditing && (
        <EditForm product={product} onSave={handleSaveChanges} />
      )}
    </div>
  );
}

export default ProductDetail;
