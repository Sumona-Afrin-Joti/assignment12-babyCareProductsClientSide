import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';



const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, error, setError } = useAuth();


  const location = useLocation();
  const history = useHistory();

  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    setError('')
    loginUser(loginData.email, loginData.password, location, history)
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 5 }}>
          {
            !isLoading &&

            <>
              <Typography variant="body1" gutterBottom>Login</Typography>
              <form onSubmit={handleLogin} >
                <TextField
                  sx={{ width: '75%', mt: 5 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onBlur={handleonBlur}
                  variant="standard" />
                <TextField
                  sx={{ width: '75%', mt: 5 }}
                  id="standard-basic"
                  label=" Your Password"
                  type="password"
                  name="password"
                  onBlur={handleonBlur}
                  autoComplete="current-password"
                  variant="standard"
                />
                <br />
                <Button variant="contained" type="submit" sx={{ width: '75%', mt: 3, backgroundColor: '#00e5ff' }} >Login</Button>
                <p>
                  New User?<NavLink to="/signUp">
                    <Button variant="text"> Please Register</Button>
                  </NavLink>
                </p>

              </form>

              {
                error && <Alert severity="error">{error}</Alert>
              }

            </>
          }


          {
            isLoading && <CircularProgress color="inherit" />
          }




        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src='login page image' alt="" ></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
