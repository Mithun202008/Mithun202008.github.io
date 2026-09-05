import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SystemBackground from './components/SystemBackground';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-cyber-void text-cyber-text relative selection:bg-cyber-neon selection:text-cyber-void">
      {/* Dynamic Animated Cyber Background */}
      <SystemBackground />

      {/* Top Sticky Command Bar */}
      <Navbar />

      {/* Main Command Center Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Telemetry */}
      <Footer />

      {/* Project Mission Inspection Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
