import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <>
      {
        !product ? <div style={{ textAlign: "center" }} ><CircularProgress color="inherit"></CircularProgress></div> : <> <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia style={{ height: "400px" }}
              component="img"
              alt="green iguana"
              height=""
              image={product.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.description.substr(0, 22)}
              </Typography>
              <Typography variant="i">
                Price: {product.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <NavLink to={`/purchase/${product._id}`} style={{ textDecoration: 'none' }} >
                <Button sx={{ backgroundColor: "#E0647A" }} variant="contained">Purchase</Button>
              </NavLink>

            </CardActions>
          </Card>
        </Grid>
        </>
      }
    </>


  );
};

export default Product;

{/**/ }
