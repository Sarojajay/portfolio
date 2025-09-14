import React from 'react';
import './Hero.css';
import profilePic from './Image/profile.jpg';

export default function Hero() {
  return (
    <header className="hero">
      {/* Social Icons top-left */}
      <div className="social-icons">
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-skype"></i></a>
      </div>

      {/* Hero center content */}
      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="hero-img" />
        <h1 className="hero-name">Ajay Kumar Saroj</h1>
        <h2 className="hero-title">
          <span className="typing-text">Full Stack Developer | ASP.NET & React JS</span>
        </h2>
        <p className="hero-desc">
          Passionate Full Stack Developer creating modern, responsive, and user-friendly web applications. Skilled in ASP.NET, React, SQL Server, and building secure, efficient systems tailored to client needs.
        </p>
        <div className="hero-buttons">
          <a
            href="https://wa.me/919519961426"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Hire Me
          </a>
          <a href="/resume.pdf" className="btn btn-light">Download Resume</a>
        </div>
      </div>
    </header>
  );
}
