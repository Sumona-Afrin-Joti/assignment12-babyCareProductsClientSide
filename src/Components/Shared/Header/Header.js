import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css';
import { Avatar } from '@mui/material';

const Header = () => {
  const { user, logOut } = useAuth();
  const [navbarClass, setNavbarClass] = useState(false);


  const changeHeaderColor = () => {
    if (window.scrollY > 90) {

      setNavbarClass(true);
    }
    else {
      setNavbarClass(false)
    }
  }

  window.addEventListener('scroll', changeHeaderColor);

  const img = <Avatar alt={user.displayName} src="/static/images/avatar/1.jpg" />

  return (

    <Navbar bg="light" expand="lg" sticky="top" className={navbarClass ? 'navbar active' : 'navbar'} >
      <Container>
        <Navbar.Brand to="#home">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto d-flex justify-content-center align-items-center">


            <Nav.Link as={NavLink} activeClassName="selected" className={navbarClass ? "active" : "menu-color"} to="/home">Home</Nav.Link>




            <Nav.Link as={NavLink} activeClassName="selected" to="/exploreProducts" className={navbarClass ? "menu-color active" : "menu-color"}>Explore Product</Nav.Link>



            <Nav.Link as={NavLink} activeClassName="selected" to="/dashboard" className={navbarClass ? "active" : "menu-color"}>Dashboard</Nav.Link>

            {
              !user.email && <Nav.Link as={NavLink} activeClassName="selected" to="/login" className={navbarClass ? "active" : "menu-color"}>Login</Nav.Link>
            }



            {
              user.email && <NavDropdown title={img} id="collasible-nav-dropdown">
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
