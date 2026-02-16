import React from 'react'
import './ServicesGrid.css'

const services = [
    {
        id: "01",
        title: "Website Development",
        description: "Custom, high-performance websites built to leave a lasting impression and drive growth.",
        tags: ["Corporate", "E-commerce", "Landing Pages"]
    },
    {
        id: "02",
        title: "Web Applications",
        description: "Scalable, robust web apps engineered for complex business needs and seamless performance.",
        tags: ["React", "SaaS", "Internal Tools"]
    },
    {
        id: "03",
        title: "UI/UX Design",
        description: "User-centered design that balances simplistic beauty with functional excellence.",
        tags: ["Prototyping", "Design Systems", "User Research"]
    }
]

export default function ServicesGrid() {
    return (
        <section id="services" className="d-section services-section">
            <div className="container">
                <div className="services-grid-layout">
                    <div className="services-left">
                        <span className="section-label vertical-label">Expertise / 02</span>
                    </div>
                    <div className="services-right">
                        <div className="section-header">
                            <h2 className="section-title">What we bring to the table.</h2>
                        </div>

                        <div className="services-grid">
                            {services.map(service => (
                                <div key={service.id} className="service-card">
                                    <div className="service-header">
                                        <span className="service-index">{service.id}</span>
                                        <h3 className="service-title">{service.title}</h3>
                                    </div>
                                    <p className="service-desc">{service.description}</p>
                                    <div className="service-tags">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
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


