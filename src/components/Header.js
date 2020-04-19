import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import cupcake from "./cupcake.png";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={cupcake}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Vanilla J's
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} href="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} href="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} href="/cart">
            Cart
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
