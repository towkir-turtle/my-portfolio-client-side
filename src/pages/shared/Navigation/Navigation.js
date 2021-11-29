import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ width: "70px" }} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">ABOUT</Nav.Link>
              <Nav.Link href="#link">SKILL</Nav.Link>
              <Nav.Link href="#link">PORTFOLIO</Nav.Link>
              <Nav.Link href="#link">CONTACT</Nav.Link>
              <Nav.Link href="#link">BLOG</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
