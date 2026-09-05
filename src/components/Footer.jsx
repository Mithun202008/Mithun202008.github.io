import React from 'react';
import { Shield, Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cyber-void border-t border-cyber-border mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-cyber-border/40">
          
          {/* Brand: MITHUN.OS */}
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyber-neon" />
            <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-cyber-heading">
              MITHUN<span className="text-cyber-neon">.OS</span>
            </span>
          </div>

          {/* Minimal Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalData.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="w-8 h-8 rounded bg-cyber-dark/80 border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-neon hover:border-cyber-neon/60 transition-all hover:shadow-neon-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="w-8 h-8 rounded bg-cyber-dark/80 border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/60 transition-all hover:shadow-cyan-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.contacts.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              title="LeetCode Profile"
              className="w-8 h-8 rounded bg-cyber-dark/80 border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-amber hover:border-cyber-amber/60 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.contacts.email}`}
              aria-label="Email Mithun"
              title="Send Direct Email"
              className="w-8 h-8 rounded bg-cyber-dark/80 border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-neon hover:border-cyber-neon/60 transition-all hover:shadow-neon-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-cyber-muted hover:text-cyber-neon transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon rounded px-2 py-1"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Minimal Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-cyber-muted">
          <div>
            © 2026 Mithun A
          </div>
          <div className="text-[11px] text-cyber-muted/80">
            ENGINEERED FOR CYBERSECURITY &amp; SYSTEMS
          </div>
        </div>

      </div>
    </footer>
  );
}
