import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard'; 

function Home() {
    const [products, setProducts] = useState([]); // State to store fetched products
    const navigate = useNavigate(); // Hook to navigate

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://e-back-3rj7.vercel.app/products');
                setProducts(response.data); // Set products data from API response
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array to fetch only on component mount

  
    return (
        <>
            <div className='main-upper'>
                <p className='main-upper-txt'>
                Shop the latest trends and timeless classics tailored to your style.
                </p> 
               
            </div>
            
            <div className='main-page'>
                {
                    products.map((item, index) => (
                        <ProductCard 
                            key={item.id} // Use unique product id for key
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            quantity={item.quantity}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default Home;
