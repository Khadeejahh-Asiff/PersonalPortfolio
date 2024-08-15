import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";
import bird from "../Assests/Images/bird.png";
import NavIcon1 from "../Assests/Images/nav-icon1.svg";
import NavIcon2 from "../Assests/Images/Github.svg";
import NavIcon3 from "../Assests/Images/nav-icon3.svg";

const NavbarMain = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState("false");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("Scrolled", onScroll);

    return () => {
      window.removeEventListener("Scrolled", onScroll);
    };
  }, []);

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "Scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: "150%" }} src={bird} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("home")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("home")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/khadeejah-asif">
                <img className="img1" src={NavIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Khadeejahh-Asiff">
                <img className="img2" src={NavIcon2} alt="GitHub" />
              </a>
              <a href="/">
                <img className="img3" src={NavIcon3} alt="G-mail" />
              </a>
            </div>
            <button
              className="button-connect"
              onClick={() => console.log("Connect")}
              href="#contact"
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
