import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import favicon from "./images/favicon.png";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="navbaro">
        <Container>
          <img src={favicon} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="   col-lg-12 col-md-2 col-sm-1 navs">
              <Link className=" item" to="/Heroo">
                Home
              </Link>
              <Link className=" item" to="/About">
                About
              </Link>
              <Link className=" item" to="/Service">
                Service
              </Link>
              <Link className=" item" to="/Portfolio">
                Portfolio
              </Link>
              <Link className=" item me-3" to="/Testi">
                Testimonilas
              </Link>
              <Link className=" item text-center" to="/Blog">
                Blog
              </Link>
              <Link className=" item" to="/Contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
