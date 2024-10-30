import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.list.find((p) => p.id === id));

  return (
    <ProductDetails product={product} />
  );
};

export default ProductDetailsPage;