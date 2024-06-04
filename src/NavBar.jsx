import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Components/Styles/NavBar.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar bg="dark" expand="lg" variant="dark" expanded={expanded}>
      <Navbar.Brand as={Link} to="/" className="Logos">
        Dralagar.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" onClick={handleToggle}>
            Home
          </Link>
          <Link to="/Portfolio" className="nav-link" onClick={handleToggle}>
            Portfolio
          </Link>
          <Link to="/CV" className="nav-link" onClick={handleToggle}>
            Resume
          </Link>
          <Link to="/Blog" className="nav-link" onClick={handleToggle}>
            Blog
          </Link>
          <Link to="/Contact" className="nav-link" onClick={handleToggle}>
            Contact
          </Link>
        </Nav>
        <button className="btn-close" onClick={handleToggle}>
          <span aria-hidden="true">×</span>
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
