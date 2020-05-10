import React, { useState } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Logo = props => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <Link to="/">
            <NavbarBrand>Tuong's Blog</NavbarBrand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Logo;
