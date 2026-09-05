import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Download } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'missions', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Missions', href: '#missions', id: 'missions' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cyber-void/90 backdrop-blur-md border-b border-cyber-border py-3.5 shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-mono text-base sm:text-lg font-bold tracking-wider text-cyber-heading group-hover:text-cyber-neon transition-colors">
              MITHUN <span className="text-cyber-neon">A</span>
            </span>
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-cyber-neon bg-cyber-dark border border-cyber-neon/30 glow-text-green font-semibold'
                      : 'text-cyber-text/80 hover:text-cyber-neon hover:bg-cyber-dark/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA: Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded bg-cyber-neon/10 border border-cyber-neon/50 text-cyber-neon text-xs font-mono font-semibold tracking-wider hover:bg-cyber-neon hover:text-cyber-void transition-all hover:shadow-neon-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-cyber-dark border border-cyber-border text-cyber-text hover:text-cyber-neon transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-border px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded font-mono text-sm text-cyber-text hover:text-cyber-neon hover:bg-cyber-surface/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-cyber-muted">&gt;</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-cyber-border/60">
              <a
                href={personalData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-cyber-neon text-cyber-void font-mono text-xs font-bold tracking-wider hover:opacity-95"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
