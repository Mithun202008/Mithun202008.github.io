import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SystemBackground from './components/SystemBackground';
import TerminalModal from './components/TerminalModal';
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
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-cyber-void text-cyber-text relative selection:bg-cyber-neon selection:text-cyber-void">
      {/* Dynamic Animated Cyber Background */}
      <SystemBackground />

      {/* Top Sticky Command Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Command Center Sections */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Telemetry */}
      <Footer />

      {/* Interactive Terminal Shell (Ctrl+K or quick button) */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Project Mission Inspection Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
