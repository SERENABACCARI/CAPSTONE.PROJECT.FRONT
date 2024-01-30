// Navbar.js
import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import logo from '../immagini/logo.bbfn.jpg';
/*import{Form,Button} from'react-bootstrap'*/


const Navbar = () => {
  return (
    <BootstrapNavbar variant="dark" expand="lg" className='navbar-style'>
      <BootstrapNavbar.Brand href="#home">
        <img className="logo" src={logo} alt="logo" />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link style={{ color: 'white' }} href="/">Home</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="/About">Gare ed Eventi</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="/Contact">Contact</Nav.Link>
        </Nav>
        <div className='containerlogin'>
          <Nav.Link style={{ color: 'white'}} href="/login">Login</Nav.Link>
        </div>

      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
