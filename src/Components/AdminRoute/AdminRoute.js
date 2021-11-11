import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { isAdmin, user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress color="inherit" />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin && user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
