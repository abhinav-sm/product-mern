import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetails = ({ product }) => {
  if (!product) return <Typography variant="h5">Product not found</Typography>;

  return (
    <Container maxWidth="md">
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={product.imageUrl || 'https://via.placeholder.com/300'}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="h6">${product.price}</Typography>
          <Typography variant="body2" color="textSecondary">
            Best Seller: {product.isBestSeller ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Recommended: {product.isRecommended ? 'Yes' : 'No'}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;