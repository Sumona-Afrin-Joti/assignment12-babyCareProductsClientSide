import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import useProducts from '../../../hooks/useProducts';

const ManageProducts = () => {
  const { products, setProducts } = useProducts();

  const handleRemove = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal(" deleted successfully!", {
            icon: "success",
          });
          fetch(`https://floating-river-34453.herokuapp.com/products/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                const remainingProducts = products.filter(product => product._id !== id)
                setProducts(remainingProducts)
              }
            })

        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }
  return (
    <Container className="mt-5">
      <Box sx={{ textAlign: "center" }}>

        <Typography variant="i" sx={{ fontSize: "35px", }} >For Any Occasion</Typography>
        <Typography variant="h3" sx={{ color: '#EF0081' }}>Special Products</Typography>


      </Box>

      {
        products.length === 0 ? <div style={{ textAlign: "center" }} ><CircularProgress color="inherit"></CircularProgress></div> : <Grid container spacing={4} sx={{ my: 5 }}>
          {
            products.map(product => <Grid key={product._id} item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="400px"
                  image={product.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.product_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>

                  <Button className="buttonHover" sx={{ backgroundColor: "#E0647A" }} onClick={() => handleRemove(product._id)} variant="contained">Remove Product</Button>


                  <Typography variant="i">
                    Price: {product.price}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>)
          }

        </Grid>
      }

    </Container>
  );
};

export default ManageProducts;
