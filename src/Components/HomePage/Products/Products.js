import React from 'react';
import { Container } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';


const Products = () => {
  const products = useProducts();
  return (

    <Container className="mt-5">
      <Box sx={{ textAlign: "center" }}>

        <Typography variant="i" sx={{ fontSize: "25px", }} >For Any Occasion</Typography>
        <Typography variant="h3" sx={{ color: '#EF0081' }}>Special Products</Typography>


      </Box>

      <Grid container spacing={4} sx={{ my: 5 }}>
        {
          products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
        }

      </Grid>
    </Container>

  );
};

export default Products;
