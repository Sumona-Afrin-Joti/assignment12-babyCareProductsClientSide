import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const SignUp = () => {

  const { setError, error, isLoading, registerUser } = useAuth();
  const [loginData, setLoginData] = useState({});

  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      setError("password didn't match")
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name, history)
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 5 }}>

          {
            !isLoading && <>
              <Typography variant="body1" gutterBottom>Register</Typography>
              <form onSubmit={handleRegister} >
                <TextField
                  sx={{ width: '75%', mt: 5 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  OnChange={handleOnChange}
                  variant="standard" />
                <TextField
                  sx={{ width: '75%', mt: 5 }}
                  id="standard-basic"
                  type="email"
                  label="Your Email"
                  name="email"
                  OnChange={handleOnChange}
                  variant="standard" />
                <TextField
                  sx={{ width: '75%', mt: 5 }}
                  id="standard-basic"
                  label=" Your Password"
                  type="password"
                  name="password"
                  OnChange={handleOnChange}
                  variant="standard"
                />
                <TextField
                  sx={{ width: '75%', mt: 5 }}
                  id="standard-basic"
                  label=" Re-type-password"
                  type="password"
                  name="password2"
                  OnChange={handleOnChange}
                  variant="standard"
                />
                <br />
                <Button variant="contained" type="submit" sx={{ width: '75%', mt: 3 }} >Register</Button>
                <p>
                  Alreadey Registered?<NavLink to="/login">
                    <Button variant="text"> Please Log in</Button>
                  </NavLink>
                </p>

              </form>

              {
                error && <small className="text-danger">{error}</small>
              }
            </>
          }



          {
            isLoading && <CircularProgress color="inherit" />
          }


        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src='loginpage img' alt="" ></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
