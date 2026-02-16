import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container navbar-content">
                <a href="/" className="logo" onClick={closeMenu}>SoftKnow.</a>

                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>Work</a></li>
                    <li><a href="#contact" className="btn-nav" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
