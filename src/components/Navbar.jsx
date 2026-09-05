import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ExternalLink, Download } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          setScrolled(currentScroll > 15);

          const sections = ['home', 'about', 'projects', 'skills', 'missions', 'contact'];
          const scrollPos = currentScroll + 160;

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
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'MISSIONS', href: '#missions', id: 'missions' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-cyber-void/90 backdrop-blur-md border-b transition-colors duration-200 ${
        scrolled
          ? 'border-cyber-border shadow-lg shadow-black/40'
          : 'border-cyber-border/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Brand: MITHUN.OS */}
        <a
          href="#home"
          className="flex items-center gap-2 group rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon"
          aria-label="Mithun Home"
        >
          <div className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse" />
          <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-cyber-heading group-hover:text-cyber-neon transition-colors">
            MITHUN<span className="text-cyber-neon">.OS</span>
          </span>
        </a>

        {/* Clean Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon ${
                  isActive
                    ? 'text-cyber-neon bg-cyber-neon/10 border border-cyber-neon/30 font-semibold'
                    : 'text-cyber-muted hover:text-cyber-heading hover:bg-cyber-dark/60'
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
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-cyber-neon/10 border border-cyber-neon/40 text-cyber-neon text-xs font-mono font-semibold tracking-wider hover:bg-cyber-neon hover:text-cyber-void transition-all hover:shadow-neon-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon"
            aria-label="Download Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-cyber-dark border border-cyber-border text-cyber-text hover:text-cyber-neon focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-border px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded font-mono text-xs text-cyber-text hover:text-cyber-neon hover:bg-cyber-surface/60 transition-colors flex items-center justify-between"
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
