import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomePageReview from '../HomePageReview/HomePageReview';

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    fetch('https://floating-river-34453.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <Container style={{ marginTop: '100px', marginBottom: '100px' }}>

      <Box sx={{ textAlign: 'center' }}>

        <Typography variant="h5" sx={{ my: 2 }}>
          Latest Testimonials
        </Typography>
        <Typography variant="h3" sx={{ color: '#E0647A' }}>
          What They Said
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ my: 5 }}>

        {
          reviews.map(review => <HomePageReview key={review._id} review={review} ></HomePageReview>)
        }

      </Grid>
    </Container>
  );
};

export default Reviews;
