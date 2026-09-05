import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Menu, X, ExternalLink, Download } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal }) {
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
    { name: '/home', href: '#home' },
    { name: '/about', href: '#about' },
    { name: '/projects', href: '#projects' },
    { name: '/skills', href: '#skills' },
    { name: '/missions', href: '#missions' },
    { name: '/contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cyber-void/90 backdrop-blur-md border-b border-cyber-border py-3 shadow-lg shadow-black/40' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & System Status */}
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-sm bg-cyber-dark border border-cyber-border flex items-center justify-center group-hover:border-cyber-neon transition-colors">
                <Shield className="w-4 h-4 text-cyber-neon" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold tracking-wider text-cyber-heading group-hover:text-cyber-neon transition-colors flex items-center gap-1.5">
                  MITHUN<span className="text-cyber-neon">.OS</span>
                </span>
                <span className="font-mono text-[9px] text-cyber-muted tracking-widest hidden sm:inline">
                  SYS_VER {personalData.systemVersion}
                </span>
              </div>
            </a>

            {/* System Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded bg-cyber-dark/80 border border-cyber-border/70 text-[11px] font-mono text-cyber-muted">
              <span className="w-2 h-2 rounded-full bg-cyber-neon animate-ping"></span>
              <span className="text-cyber-neon font-semibold">ONLINE</span>
              <span className="text-cyber-border">|</span>
              <span>INDIA</span>
              <span className="text-cyber-border">|</span>
              <span className="text-cyber-cyan text-[10px]">OPEN_FOR_OPPORTUNITIES</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.replace('/', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-cyber-neon bg-cyber-dark border border-cyber-neon/30 glow-text-green'
                      : 'text-cyber-text/80 hover:text-cyber-neon hover:bg-cyber-dark/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Terminal Button & Resume Link */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              title="Open Interactive Terminal (or press Ctrl+K)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyber-dark border border-cyber-border hover:border-cyber-cyan text-cyber-cyan text-xs font-mono transition-all hover:shadow-cyan-sm"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>TERMINAL</span>
              <kbd className="hidden lg:inline px-1 py-0.2 bg-cyber-surface rounded text-[9px] text-cyber-muted border border-cyber-border">^K</kbd>
            </button>

            {/* Resume Button */}
            <a
              href={personalData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-cyber-neon/10 border border-cyber-neon/50 text-cyber-neon text-xs font-mono font-semibold tracking-wider hover:bg-cyber-neon hover:text-cyber-void transition-all hover:shadow-neon-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded bg-cyber-dark border border-cyber-border text-cyber-cyan text-xs"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
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
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyber-border/60 text-[11px] font-mono text-cyber-muted">
              <span className="flex items-center gap-1.5 text-cyber-neon">
                <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse"></span>
                SYSTEM ONLINE
              </span>
              <span>TAMIL NADU, IN</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded font-mono text-sm text-cyber-text hover:text-cyber-neon hover:bg-cyber-surface/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-cyber-muted">&gt;</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-cyber-border/60 flex flex-col gap-2">
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
