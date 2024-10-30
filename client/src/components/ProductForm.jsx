import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch, FormControlLabel, Container } from '@mui/material';

const ProductForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [price, setPrice] = useState(initialValues?.price || '');
  const [imageUrl, setImageUrl] = useState(initialValues?.imageUrl || '');
  const [isBestSeller, setIsBestSeller] = useState(initialValues?.isBestSeller || false);
  const [isRecommended, setIsRecommended] = useState(initialValues?.isRecommended || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { title, price, imageUrl, isBestSeller, isRecommended };
    onSubmit(productData);
  };

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title);
      setPrice(initialValues.price);
      setImageUrl(initialValues.imageUrl);
      setIsBestSeller(initialValues.isBestSeller);
      setIsRecommended(initialValues.isRecommended);
    }
  }, [initialValues]);

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Switch
              checked={isBestSeller}
              onChange={(e) => setIsBestSeller(e.target.checked)}
            />
          }
          label="Best Seller"
        />
        <FormControlLabel
          control={
            <Switch
              checked={isRecommended}
              onChange={(e) => setIsRecommended(e.target.checked)}
            />
          }
          label="Recommended"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;