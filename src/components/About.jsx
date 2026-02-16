import React from 'react'
import './About.css'

export default function About() {
    return (
        <section id="about" className="d-section about-section">
            <div className="container about-container">
                <div className="about-grid">
                    <div className="about-left">
                        <span className="section-label vertical-label">Information / 01</span>
                    </div>
                    <div className="about-right">
                        <h2 className="about-title">
                            SoftKnow Technology was born from a <span className="text-highlight">shared vision</span> of digital excellence.
                        </h2>

                        <div className="about-content-wrapper">
                            <div className="about-text">
                                <p>
                                    Started by three friends with a passion for innovation, we combined our strengths to build an agency that puts quality before compromise.
                                </p>
                                <p>
                                    We believe that every digital product should be a masterpiece of logic and design. We don't just write code; we cultivate experiences that scale.
                                </p>
                            </div>

                            <div className="stats-grid">
                                <div className="stat-item">
                                    <span className="stat-number">03</span>
                                    <span className="stat-label">Founders</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Commitment</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">Quality</span>
                                    <span className="stat-label">Priority</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

