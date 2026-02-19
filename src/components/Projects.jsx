import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Layout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'ProCMS',
            description: 'Enterprise-grade Content Management System built with Python and Django. Scalable architecture for high-traffic environments.',
            tags: ['Python', 'Django', 'Backend'],
            icon: <Layers size={32} />,
            color: 'var(--accent-primary)'
        },
        {
            title: 'Personal Portfolio',
            description: 'Responsive personal website demonstrating modern web technologies and automated deployment pipelines via Coolify.',
            tags: ['React', 'Vite', 'Coolify'],
            icon: <Layout size={32} />,
            color: 'var(--accent-tertiary)'
        },
    ];

    return (
        <section id="projects" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                        Our Projects
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-tertiary)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                background: 'white',
                                overflow: 'hidden',
                                border: 'none',
                                borderBottom: `4px solid ${project.color}`
                            }}
                        >
                            <div style={{ padding: '2rem', flex: 1 }}>
                                <div style={{
                                    color: project.color,
                                    marginBottom: '1rem',
                                    display: 'inline-block',
                                    padding: '10px',
                                    background: '#f4f6f8',
                                    borderRadius: '8px'
                                }}>
                                    {project.icon}
                                </div>

                                <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: 'var(--accent-primary)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                    {project.description}
                                </p>
                            </div>

                            <div style={{
                                padding: '1rem 2rem',
                                background: '#f9fafb',
                                borderTop: '1px solid #eee',
                                display: 'flex',
                                gap: '0.5rem',
                                flexWrap: 'wrap'
                            }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.75rem',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '4px',
                                        background: 'white',
                                        border: '1px solid #ddd',
                                        color: '#666',
                                        fontWeight: 500
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
