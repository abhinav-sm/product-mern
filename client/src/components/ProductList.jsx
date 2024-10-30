import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProductList = ({ products, onDelete }) => {
  console.log(products, "products 8")
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Best Seller</TableCell>
            <TableCell>Recommended</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { products?.products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <Switch checked={product.isBestSeller} disabled />
              </TableCell>
              <TableCell>
                <Switch checked={product.isRecommended} disabled />
              </TableCell>
              <TableCell>
                <IconButton component={Link} to={`/product/edit/${product._id}`}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(product.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;