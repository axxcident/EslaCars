import React, { useState } from "react";
import "./App.css";
import "./index.css";
// Allmän Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap åt Navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
// React Router
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

// Redux
import { useSelector } from "react-redux";
import { selectCars } from "./features/navbar/carSlice";

// miscellanious

function App() {
  const cars = useSelector(selectCars);
  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
    console.log("klickas?");
  };

  return (
    <div className="App">
      <Navbar
        aria-expanded={expanded}
        collapseOnSelect
        expand="lg"
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav collapsible-nav-dropdown" />
          <Navbar.Collapse id="responsive-navbar-nav collapsible-nav-dropdown">
            <Nav className="me-auto">
              {cars &&
                cars.map((car: string, index: string) => (
                  <Link key={index} id="Nav.Link" to={"/"}>
                    {car}
                  </Link>
                ))}
            </Nav>

            <Nav>
              <Link id="Nav.Link" to={"/"} onClick={() => setExpanded(false)}>
                Account
              </Link>
              <NavDropdown
                className="my-nav-dropdown"
                onToggle={() => setExpanded(!expanded)}
                title="Menu"
                id="Nav.Link collapsible-nav-dropdown"
                onSelect={handleSelect}
              >
                <Link
                  id="Nav.Link"
                  to={"/about"}
                  onClick={() => setExpanded(false)}
                >
                  About
                </Link>
                <Link id="Nav.Link" to={"/"} onClick={() => setExpanded(false)}>
                  Contact
                </Link>
                <Link id="Nav.Link" to={"/"} onClick={() => setExpanded(false)}>
                  FAQ
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://www.tesla.com"
                  target="_blank"
                  onClick={() => setExpanded(false)}
                >
                  Real Tesla site
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
