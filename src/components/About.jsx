import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Globe } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Frontend', icon: <Globe />, color: 'var(--accent-primary)' },
        { name: 'Backend', icon: <Server />, color: 'var(--accent-secondary)' },
        { name: 'Database', icon: <Database />, color: 'var(--accent-tertiary)' },
        { name: 'Design', icon: <Code />, color: '#ff006e' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section id="about" style={{ padding: '5rem 0' }}>
            <div className="container">
                <motion.h2
                    className="gradient-text"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
                >
                    About Me
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            I'm a passionate developer exploring the latest in web technologies.
                            Always looking for ways to optimize performance and create stunning user interfaces.
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                            Currently, I'm focusing on containerization and deployment strategies using tools like Coolify to manage my applications efficiently.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={item}
                                className="glass-panel"
                                style={{
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    cursor: 'default',
                                    transition: 'transform 0.3s ease'
                                }}
                                whileHover={{ scale: 1.05, borderColor: skill.color }}
                            >
                                <div style={{ color: skill.color, marginBottom: '0.5rem' }}>
                                    {React.cloneElement(skill.icon, { size: 32 })}
                                </div>
                                <h3 style={{ margin: 0 }}>{skill.name}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
