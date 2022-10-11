import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header/Header';
import ProductList from './components/product-list/ProductList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from './components/product-details/ProductDetails';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/sneakers-item/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
