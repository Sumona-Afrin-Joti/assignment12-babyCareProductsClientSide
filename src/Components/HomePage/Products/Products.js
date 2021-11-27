import React from 'react';
import { Container } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';
import Box from '@mui/material/Box';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom';


const Products = () => {
  const { products } = useProducts();
  const { isLoading } = useAuth();

  return (

    <Container className="mt-5">
      <Box sx={{ textAlign: "center" }}>

        <Typography variant="i" sx={{ fontSize: "2.9rem", color: "#585B6D" }} >Advanced Natural Skin Care Products
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <hr style={{ width: "30%", backgroundColor: "#585B6D", height: '5px' }} />
        </div>

        <Typography sx={{ fontSize: "2.9rem", color: "#585B6D" }}>For Your Baby</Typography>



      </Box>


      {isLoading ?
        <div style={{ textAlign: "center" }}>
          <CircularProgress color="inherit"></CircularProgress>
        </div> :

        <Grid container spacing={4} sx={{ my: 5 }}>
          {
            products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
          }

        </Grid>}

      <div className="text-center">
        <NavLink className="textDecoration" to="/exploreProducts"><Button variant="contained" style={{ backgroundColor: "#E0647A" }} >Explore Products</Button></NavLink>

      </div>

    </Container>

  );
};

export default Products;
