import React from 'react'
import './Portfolio.css'

const projects = [
    {
        id: "01",
        title: "E-Commerce Rebrand",
        category: "Visual Identity / Web",
        year: "2025"
    },
    {
        id: "02",
        title: "FinTech Dashboard",
        category: "Product Design / App",
        year: "2025"
    },
    {
        id: "03",
        title: "Agency Portfolio",
        category: "Creative Direction",
        year: "2024"
    }
]

export default function Portfolio() {
    return (
        <section id="work" className="d-section portfolio-section">
            <div className="container">
                <div className="portfolio-grid-layout">
                    <div className="portfolio-left">
                        <span className="section-label vertical-label">Work / 03</span>
                    </div>
                    <div className="portfolio-right">
                        <div className="section-header">
                            <h2 className="section-title">Showcasing our craft.</h2>
                        </div>

                        <div className="portfolio-list">
                            {projects.map(project => (
                                <div key={project.id} className="project-item">
                                    <div className="project-info">
                                        <span className="project-index">{project.id}</span>
                                        <div className="project-main">
                                            <h3 className="project-title">{project.title}</h3>
                                            <span className="project-category">{project.category}</span>
                                        </div>
                                        <span className="project-year">({project.year})</span>
                                    </div>
                                    <div className="project-reveal">
                                        <div className="reveal-inner">
                                            <img
                                                src={`https://picsum.photos/seed/${project.id}/600/400`}
                                                alt={project.title}
                                                className="reveal-img"
                                            />
                                            <div className="reveal-overlay">Explore Case Study</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


