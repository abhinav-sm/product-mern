import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductList';
import AddEditProductPage from './pages/AddEditProduct';
import ProductDetailsPage from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/add" element={<AddEditProductPage />} />
        <Route path="/product/edit/:id" element={<AddEditProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;