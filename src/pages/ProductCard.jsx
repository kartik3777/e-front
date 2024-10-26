import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'

function ProductCard(props){
    const navigate = useNavigate();

     // Function to truncate the description to 20 words
  const truncateDescription = (text) => {
    const words = text.split(' ');
    return words.length > 16 ? words.slice(0, 16).join(' ') + '...' : text;
  };

  const handleBuyNowClick = () => {
    // Navigate to the product detail page
    navigate(`/product/${props.id}`);
  };
 
   return (
    <div className='product-card'>
    <h2 className='product-name'>{props.name}</h2>
    <p className='product-description'>{truncateDescription(props.description)}</p>
    <p className='product-price'>Price: {props.price}</p>
    <p className='product-quantity'>{props.quantity} items left</p>
    <button className='buy-button' onClick={handleBuyNowClick}>See Details</button>
  </div>
   )
}

export default ProductCard