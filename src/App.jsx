import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import InteractiveWidget from './components/InteractiveWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <InteractiveWidget />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Kiran. Built with Vite & Coolify.</p>
      </footer>
    </div>
  );
}

export default App;
