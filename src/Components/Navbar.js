import React , { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

// Navbar logo
import Nav_Logo from '../Assets/Images/logo.svg';

function NavbarMain() {

  return (
    <>
    
   
    <div className="nav_bar">

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
        <img 
          src={Nav_Logo} 
          alt="Logo" 
          width="100"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="ms-auto navbar-nav">
            <Nav.Link as={NavLink} className="nav-link-li" to="/" exact > Home </Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-li" to="/about" > About </Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-li" to="/service" > Service </Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-li" to="/team" > Team </Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-li" to="/blog" > Blog </Nav.Link>
            <Nav.Link as={NavLink} className="nav-link-li" to="/contact" > Contact Us </Nav.Link>
          </Nav>
        <Nav.Link as={NavLink} to="/login" className="ml-auto nav-btn">
          Get A Quote
        </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>

    </>

  );
}

export default NavbarMain;
