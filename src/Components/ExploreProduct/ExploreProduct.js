import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';


const ExploreProduct = ({ product }) => {
  return (
    <Grid item xs={12} md={4}>
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

          <NavLink style={{ textDecoration: 'none' }} to={`/purchase/${product._id}`}>

            <Button sx={{ backgroundColor: "#E0647A" }} variant="contained">Purchase</Button>
          </NavLink>


          <Typography variant="i">Price: {product.price} </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ExploreProduct;
