import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--accent-primary)',
        color: 'white',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>
          <span style={{ color: 'white' }}>Nepal Telecom</span> <span style={{ fontSize: '0.8rem', fontWeight: 'normal', opacity: 0.8 }}>Clone</span>
        </h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '2rem' }}>
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: 'white',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px'
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
