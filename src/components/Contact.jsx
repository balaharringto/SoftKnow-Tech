import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <section id="contact" className="d-section contact-section">
            <div className="container contact-container">
                <div className="contact-grid">
                    <div className="contact-left">
                        <span className="section-label vertical-label">Connection / 04</span>
                    </div>

                    <div className="contact-right">
                        <div className="contact-header">
                            <h2 className="contact-title">Let's create something <span className="text-highlight">extraordinary</span> together.</h2>
                        </div>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="project">Tell us about your project</label>
                                <textarea id="project" rows="4" placeholder="What's on your mind?"></textarea>
                            </div>

                            <div className="form-footer">
                                <p className="contact-meta">Typically responds within 24 hours.</p>
                                <button type="submit" className="submit-btn">
                                    <span className="btn-text">Send Message</span>
                                    <span className="btn-icon">→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

