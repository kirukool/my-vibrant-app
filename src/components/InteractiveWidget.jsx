import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp } from 'lucide-react';

const InteractiveWidget = () => {
    const [likes, setLikes] = useState(0);
    const [notified, setNotified] = useState(false);

    const handleLike = () => {
        setLikes(prev => prev + 1);
        setNotified(true);
        setTimeout(() => setNotified(false), 2000);
    };

    return (
        <section id="contact" style={{ padding: '4rem 0', background: 'var(--accent-primary)', color: 'white' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Connect With Us</h2>
                    <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                        Stay updated with our latest services and offers. Show your support by connecting below.
                    </p>

                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleLike}
                            style={{
                                background: 'var(--accent-tertiary)',
                                color: 'white',
                                padding: '1rem 3rem',
                                borderRadius: '4px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                border: 'none'
                            }}
                        >
                            <ThumbsUp size={20} />
                            <span>Recommend ({likes})</span>
                        </motion.button>

                        <AnimatePresence>
                            {notified && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: -40 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'white',
                                        color: 'var(--accent-primary)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Thank you!
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveWidget;
