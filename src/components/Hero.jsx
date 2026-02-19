import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px' // for header
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        color: '#fff',
                        fontWeight: 'bold',
                        boxShadow: '0 0 30px rgba(0, 242, 255, 0.3)'
                    }}>
                        K
                    </div>
                </motion.div>

                <motion.h1
                    className="gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ fontSize: '4rem', margin: '0 0 1rem 0', lineHeight: 1.1 }}
                >
                    Hello, I'm Kiran.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}
                >
                    I build vibrant and simple digital experiences.
                    Currently testing <span style={{ color: 'var(--accent-primary)' }}>Coolify</span> deployments.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <a href="#about" style={{
                        display: 'inline-block',
                        animation: 'bounce 2s infinite',
                        color: 'var(--text-secondary)'
                    }}>
                        <ArrowDown size={32} />
                    </a>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(112, 0, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />
        </section>
    );
};

export default Hero;
