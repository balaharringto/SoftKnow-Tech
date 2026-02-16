import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer section">
            <div className="container">
                <div className="footer-top">
                    <h2 className="footer-cta">Let's create something<br />amazing together.</h2>
                    <a href="#contact" className="cta-button">Start a Project</a>
                </div>

                <div className="footer-bottom">
                    <div className="footer-info">
                        <span className="logo">SoftKnow.</span>
                        <p>© 2026 SoftKnow Technology</p>
                    </div>
                    <div className="footer-links">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
