import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--header-height)',
            background: 'linear-gradient(to bottom, #f4f6f8 0%, #eef2f5 100%)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'var(--accent-primary)',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        color: '#fff',
                        fontWeight: 'bold',
                        border: '4px solid white',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                        <User size={60} />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        fontSize: '3rem',
                        color: 'var(--accent-primary)',
                        marginBottom: '0.5rem',
                        fontWeight: 'bold'
                    }}
                >
                    Namaste, I'm Kiran.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 'normal', margin: '0 0 2rem 0' }}
                >
                    Connecting People through Digital Solutions.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem auto' }}
                >
                    Specializing in robust web applications and seamless deployments using Coolify.
                    Bringing the reliability of enterprise telecom to personal projects.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                >
                    <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        <Mail size={18} /> Contact Me
                    </a>
                    <a href="#projects" style={{
                        padding: '0.8rem 2rem',
                        border: '2px solid var(--accent-primary)',
                        borderRadius: '4px',
                        color: 'var(--accent-primary)',
                        fontWeight: 'bold',
                        textDecoration: 'none'
                    }}>
                        View Works
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
