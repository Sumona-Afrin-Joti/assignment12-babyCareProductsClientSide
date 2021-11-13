import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css';
import { Avatar } from '@mui/material';

const Header = () => {
  const { user, logOut } = useAuth();

  const img = <Avatar alt={user.displayName} src="/static/images/avatar/1.jpg" />

  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="#home">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto d-flex justify-content-center align-items-center">


            <Nav.Link as={NavLink} activeStyle={{
              fontWeight: "bold",
              color: "#A47355"
            }} className="menu-color" to="/home">Home</Nav.Link>




            <Nav.Link as={NavLink} activeStyle={{
              fontWeight: "bold",
              color: "#A47355"
            }} to="/exploreProducts">Explore Product</Nav.Link>



            <Nav.Link as={NavLink} activeStyle={{
              fontWeight: "bold",
              color: "#A47355"
            }} to="/dashboard">Dashboard</Nav.Link>

            {
              !user.displayName && <Nav.Link as={NavLink} activeStyle={{
                fontWeight: "bold",
                color: "#A47355"
              }} to="/login">Login</Nav.Link>
            }



            {
              user.displayName && <NavDropdown title={img} id="collasible-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">{user.displayName}</NavDropdown.Item>
                <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>

              </NavDropdown>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
};

export default Header;
