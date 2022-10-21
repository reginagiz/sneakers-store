import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header/Header';
import ProductList from './components/product-list/ProductList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from './components/product-details/ProductDetails';
import CartItem from './components/basket/Basket';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/sneakers-item/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
