import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code, Layout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'ProCMS',
            description: 'A robust Content Management System built with Python and Django. Designed for scalability and ease of content administration.',
            tags: ['Python', 'Django', 'Backend'],
            icon: <Layers size={40} />,
            color: 'var(--accent-secondary)'
        },
        {
            title: 'Personal Portfolio',
            description: 'A vibrant, interactive personal website built with React and Vite. Features neon aesthetics, smooth animations, and Coolify deployment.',
            tags: ['React', 'Vite', 'Framer Motion', 'Coolify'],
            icon: <Layout size={40} />,
            color: 'var(--accent-primary)'
        },
        // Add more projects here as needed
    ];

    return (
        <section id="projects" style={{ padding: '5rem 0' }}>
            <div className="container">
                <motion.h2
                    className="gradient-text"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    My Works
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, boxShadow: `0 10px 30px -10px ${project.color}` }}
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <div style={{ color: project.color, marginBottom: '1.5rem' }}>
                                {project.icon}
                            </div>

                            <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '20px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: project.color
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
