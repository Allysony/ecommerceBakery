import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import textstyles from "./styles.css";
import logo from "./logo.png";

function Header() {
  return (
    <Navbar bg="light">
      <p style={textstyles.p}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Vanilla J's
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </p>
    </Navbar>
  );
}

export default Header;
