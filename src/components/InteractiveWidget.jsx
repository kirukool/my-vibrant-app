import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const InteractiveWidget = () => {
    const [likes, setLikes] = useState(0);
    const [particles, setParticles] = useState([]);

    const handleLike = (e) => {
        setLikes(prev => prev + 1);

        // Create new particle
        const id = Date.now();
        const newParticle = { id, x: 0, y: 0 }; // We'll randomize in render or CSS
        setParticles(prev => [...prev, newParticle]);

        // Remove particle after animation
        setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== id));
        }, 1000);
    };

    return (
        <section id="contact" style={{ padding: '5rem 0 8rem 0', textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    className="glass-panel"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Show Some Love</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        If you like this vibrant design, give it a heart!
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleLike}
                        style={{
                            background: 'linear-gradient(45deg, var(--accent-secondary), var(--accent-tertiary))',
                            color: 'white',
                            padding: '1rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            margin: '0 auto',
                            boxShadow: '0 10px 20px rgba(255, 0, 255, 0.3)'
                        }}
                    >
                        <Heart fill="white" size={24} />
                        <span>{likes}</span>
                    </motion.button>

                    {/* Particles System */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', pointerEvents: 'none' }}>
                        <AnimatePresence>
                            {particles.map(particle => (
                                <motion.div
                                    key={particle.id}
                                    initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
                                    animate={{
                                        opacity: 0,
                                        scale: 1.5,
                                        x: (Math.random() - 0.5) * 200,
                                        y: (Math.random() - 0.5) * 200 - 100
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    style={{
                                        position: 'absolute',
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: Math.random() > 0.5 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                                    }}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default InteractiveWidget;
