"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="md" className="border-y shadow-2xl z-10 ">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-auto" />
        <Navbar.Collapse id="responsive-navbar-nav" className="shadow-2xl sm:shadow-none" >
          <Nav className="m-auto uppercase">
            <NavDropdown title="Home" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">featured</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">about</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="categories" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">featured</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">about</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </NavDropdown>
            <Nav.Link href="#features">contact</Nav.Link>
            <Nav.Link href="#features">categories</Nav.Link>
            <Nav.Link href="#features">about</Nav.Link>
            <Nav.Link href="#features">featured</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
