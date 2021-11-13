import React from 'react';
import { Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import useProducts from '../hooks/useProducts';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';


const ExploreProducts = () => {
  const products = useProducts();
  console.log(products)
  return (
    <>
      <Header></Header>
      <Container className="mt-5">
        <Box sx={{ textAlign: "center" }}>

          <Typography variant="i" sx={{ fontSize: "25px", }} >For Any Occasion</Typography>
          <Typography variant="h3" sx={{ color: '#EF0081' }}>Special Products</Typography>


        </Box>

        <Grid container spacing={3} sx={{ my: 5 }}>
          {
            products.map(product => <ExploreProduct key={product._id} product={product}></ExploreProduct>)
          }

        </Grid>
      </Container>
      <Footer></Footer>
    </>



  );
};

export default ExploreProducts;
