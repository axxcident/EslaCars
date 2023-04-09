import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import "./index.css";
// Allmän Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap åt Navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="Logo"
              className="logo"
              src="/images/0x0-Tesla_Wordmark_20_Black.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link id="Nav.Link" to={"/"}>
                Model Y
              </Link>
              <Link id="Nav.Link" to={"/"}>
                Model X
              </Link>
              <Link id="Nav.Link" to={"/"}>
                Model S
              </Link>
            </Nav>
            <Nav>
              <Link id="Nav.Link" to={"/"}>
                Model Y
              </Link>
              <Link id="Nav.Link" to={"/"}>
                Model X
              </Link>
              <NavDropdown title="Menu" id="Nav.Link collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link id="Nav.Link" to={"/about"}>
                    About
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link id="Nav.Link" to={"/about"}>
                    About
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link id="Nav.Link" to={"/about"}>
                    About
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <a id="Nav.Link" href="https://www.tesla.com" target="_blank">
                    Real Tesla site
                  </a>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
