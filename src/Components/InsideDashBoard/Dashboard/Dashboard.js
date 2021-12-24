import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Switch, Route, } from "react-router-dom";
import Pay from '../PagesForUser/Pay/Pay';
import MyOrders from '../PagesForUser/MyOrders/MyOrders'
import Review from '../PagesForUser/Review/Review'
import ManageAllOrders from '../PagesForAdmin/ManageAllOrders/ManageAllOrders'
import AddProduct from '../PagesForAdmin/AddProduct/AddProduct'
import MakeAdmin from '../PagesForAdmin/MakeAdmin/MakeAdmin'
import ManageProducts from '../PagesForAdmin/ManageProducts/ManageProducts';
import useAuth from '../../hooks/useAuth';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Button from '@mui/material/Button';
import DashboardHome from '../DashboardHome/DashboardHome';
import img from '../../../images/logo.png';
import AdminRoute from '../../AdminRoute/AdminRoute';
import "./Dashboard.css"

const drawerWidth = 240;

function Dashboard(props) {
  const { logOut, isAdmin } = useAuth();
  console.log(isAdmin)

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();


  const drawer = (
    <div>

      <Toolbar>
        <img className="logo" src={img} alt="" />
      </Toolbar>

      <List sx={{ mt: 5 }}>
        <ListItem><NavLink to="/home" activeClassName="selected" >Home</NavLink></ListItem>

        <ListItem><NavLink to={`${url}`} activeClassName="selected">DashboardHome</NavLink></ListItem>

        <ListItem><NavLink to={`${url}/pay`} activeClassName="selected">Payment</NavLink></ListItem>
        <ListItem><NavLink to={`${url}/myOrders`} activeClassName="selected">My Orders</NavLink></ListItem>

        <ListItem><NavLink to={`${url}/review`} activeClassName="selected">Add Review</NavLink></ListItem>



        {
          isAdmin && <>
            <ListItem><NavLink activeClassName="selected" to={`${url}/manageAllOrders`}>Manage All Orders</NavLink></ListItem>

            <ListItem><NavLink activeClassName="selected" to={`${url}/addProduct`}>Add Product</NavLink></ListItem>

            <ListItem><NavLink activeClassName="selected" to={`${url}/makeAdmin`}>Make Admin</NavLink></ListItem>

            <ListItem><NavLink activeClassName="selected" to={`${url}/manageProducts`}>Manage Products</NavLink></ListItem>
          </>
        }

        <ListItem>
          <NavLink to="/" style={{ textDecoration: 'none' }}><Button className="buttonHover" variant="contained" sx={{ backgroundColor: "#E0647A" }} onClick={logOut} >Log Out</Button></NavLink>
        </ListItem>

      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar sx={{ backgroundColor: "#E0647A" }} >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />

          <Switch>

            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>

            <PrivateRoute path={`${path}/pay`}>
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path={`${path}/review`}>
              <Review></Review>
            </PrivateRoute>


            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>

          </Switch>

        </Box>
      </Box>
    </>

  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

