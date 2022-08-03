import React from "react";
import {  Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
    return (
<Navbar fixed="top" bg="light" expand="md">
    <Container>
        <Navbar.Brand href="/home">Bb.</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
<Nav className="just">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/resume">Resume</Nav.Link>
      </Nav.Item>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default NavBar;