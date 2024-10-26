import React from "react";
import "./navbar.css";
import { Outlet, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/add-product'); // Navigate to Add Product page
};


  return (
    <>
      <div className="nav-out">
        <div className="nav-left">
          <h1 onClick={() => navigate("/")} className="website-name">E-Commerce</h1>
        </div>
        <div className="nav-right">
          <button className='login-link' onClick={handleAddProduct}>Add Product</button>
        </div>
      </div>

      <Outlet />
    </> 
  );
}

export default NavBar;
