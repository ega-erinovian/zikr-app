import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand={false} fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <h2 className="fw-bold">
              Zikr<span className="text-success">.</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <h2 className="fw-bold">
                  Zikr<span className="text-success">.</span>
                </h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
