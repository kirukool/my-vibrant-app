import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="glass-panel"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>
          <span className="gradient-text">Me.</span>
        </h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '2rem' }}>
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} style={{ fontWeight: 500 }}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
