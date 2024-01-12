// Navbar.js
import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';  
import logo from '../immagini/logo.bbfn.jpg'

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className='navbar-style'>
      <BootstrapNavbar.Brand href="#home">
        <img className="logo" src={logo} alt="logo" /> 
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link style={{ color: 'white' }}  href="/">Home</Nav.Link >
          <Nav.Link style={{ color: 'white' }} href="/About">Gare ed Eventi</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="/Contact">Contact</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;  
