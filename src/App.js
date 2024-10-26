import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import ProductDetail from './pages/ProductDetail'
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
           <Route path="product/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
