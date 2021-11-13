import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Stack from '@mui/material/Stack';
import stactImg1 from '../../../images/stackImg1.png'
import stactImg2 from '../../../images/stackImg2.png'
import stactImg3 from '../../../images/stackImg3.png'
import stactImg4 from '../../../images/stackImg4.png'




const ExtraSection = () => {
  return (
    <Container sx={{ my: 5 }}>

      <Stack spacing={2} sx={{ textAlign: 'center' }}>
        <Typography variant="h5" style={{ color: "gray" }} >YOUR TRUST, OUR PRODUCTS</Typography>
        <Typography variant="h3">Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidun”
          - Hellen Miller</Typography>

        <Grid container spacing={2} >

          <Grid item xs={12} md={3}>
            <img src={stactImg1} alt="" />

          </Grid>
          <Grid item xs={12} md={3}>
            <img src={stactImg2} alt="" />

          </Grid>
          <Grid item xs={12} md={3}>
            <img src={stactImg3} alt="" />

          </Grid>
          <Grid item xs={12} md={3}>
            <img src={stactImg4} alt="" />

          </Grid>

        </Grid>

      </Stack>
    </Container>
  );
};

export default ExtraSection;
