import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";

const MainMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Link to="/">
                <NavItem>
                  <NavLink>Home</NavLink>
                </NavItem>
              </Link>
              <Link to="/blogs">
                <NavItem>
                  <NavLink>Blogs</NavLink>
                </NavItem>
              </Link>
              <Link to="/about">
                <NavItem>
                  <NavLink>About</NavLink>
                </NavItem>
              </Link>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainMenu;
