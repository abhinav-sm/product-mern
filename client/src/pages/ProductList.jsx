import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { fetchProducts, deleteProduct } from '../redux/slices/productSlice';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <Container maxWidth="lg">
      <h1>Product List</h1>
      <Button variant="contained" component={Link} to="/product/add">
        Add Product
      </Button>
      <ProductList products={products || []} onDelete={handleDelete} />
    </Container>
  );
};

export default ProductListPage;