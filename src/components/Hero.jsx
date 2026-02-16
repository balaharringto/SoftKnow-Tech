import React, { useEffect, useRef } from 'react'
import './Hero.css'
import owner from '../assets/images/owner.jpeg'
export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        // Simple load animation
        const timer = setTimeout(() => {
            if (heroRef.current) {
                heroRef.current.classList.add('visible');
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero-section" ref={heroRef}>
            <div className="container hero-container">
                <div className="hero-label-wrapper">
                    <span className="section-label vertical-label">Header / 00</span>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="line">SOFTKNOW</span>
                        <br />
                        <span className="line indent">TECHNOLOGY</span>
                    </h1>

                    <div className="hero-bottom-grid">
                        <div className="hero-description">
                            <p>We are a creative digital agency helping brands grow smarter. From strategy to execution, we turn complex ideas into <span className="text-highlight">first-class digital reality</span>.</p>
                        </div>

                        <div className="hero-visual">
                            <div className="team-overlap">
                                <div className="team-card card-1">
                                    <div className="img-wrapper">
                                        <img src={owner} alt="Sarah Jen" />
                                    </div>
                                    <div className="member-info">
                                        <h3>Sarah Jen</h3>
                                        <span>Founder</span>
                                    </div>
                                </div>
                                <div className="team-card card-2">
                                    <div className="img-wrapper">
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="David Ross" />
                                    </div>
                                    <div className="member-info">
                                        <h3>David Ross</h3>
                                        <span>CTO</span>
                                    </div>
                                </div>
                                <div className="team-card card-3">
                                    <div className="img-wrapper">
                                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" alt="Emily Chen" />
                                    </div>
                                    <div className="member-info">
                                        <h3>Emily Chen</h3>
                                        <span>Visual Lead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

