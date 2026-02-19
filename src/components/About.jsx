import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Globe } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Frontend', icon: <Globe />, description: 'React, Vite, Responsive Design' },
        { name: 'Backend', icon: <Server />, description: 'Node.js, Python, API Development' },
        { name: 'Database', icon: <Database />, description: 'SQL, NoSQL, Data Management' },
        { name: 'Architecture', icon: <Code />, description: 'System Design, Coolify, Docker' },
    ];

    return (
        <section id="about" style={{ padding: '5rem 0', background: 'white' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                        About Me
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-tertiary)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                textAlign: 'center',
                                borderTop: '4px solid var(--accent-primary)',
                                transition: 'transform 0.3s'
                            }}
                            whileHover={{ transform: 'translateY(-5px)' }}
                        >
                            <div style={{
                                color: 'var(--accent-primary)',
                                background: '#eef2f5',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                {React.cloneElement(skill.icon, { size: 32 })}
                            </div>
                            <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{skill.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
