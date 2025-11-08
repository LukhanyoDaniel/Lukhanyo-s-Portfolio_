
// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import About from './about';
import Skill from './skill';
import Project from './project';
import Contact from './contact';
import Certificates from './certificates';
import Footer from './footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Try to read from localStorage for persistence
    const stored = localStorage.getItem('isDarkMode');
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    // Save dark mode state
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    // Toggle dark class on body
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
