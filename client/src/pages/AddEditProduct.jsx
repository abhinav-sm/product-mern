import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { addProduct, updateProduct } from '../redux/slices/productSlice';

const AddEditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(id, "id of the data 11")
  const product = useSelector((state) => id ? state.products.list.products.find((p) => p._id === id) : null);
  // const product = useSelector((state) => state.products);
  console.log(product, "product 13")

  const handleSubmit = (productData) => {
    if (id) {
      dispatch(updateProduct({ ...productData, id }));
    } else {
      dispatch(addProduct(productData));
    }
    navigate('/');
  };

  return (
    <ProductForm onSubmit={handleSubmit} initialValues={product} />
  );
};

export default AddEditProductPage;