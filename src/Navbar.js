import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">Personal Information</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
