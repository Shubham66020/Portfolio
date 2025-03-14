import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;