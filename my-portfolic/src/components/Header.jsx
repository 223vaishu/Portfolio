import React from 'react';
import '../style.css';


const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;