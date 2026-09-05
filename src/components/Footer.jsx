import React, { useState, useEffect } from 'react';
import { Shield, Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cyber-void border-t border-cyber-border mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-cyber-border/60">
          
          {/* Brand & System Status */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyber-neon" />
              <span className="font-mono text-base font-bold tracking-wider text-cyber-heading">
                MITHUN<span className="text-cyber-neon">.OS</span>
              </span>
            </div>
            <p className="text-xs text-cyber-muted font-mono leading-relaxed">
              Personal Engineering Command Center. Designed with cyber-resilient principles and clean architecture.
            </p>
          </div>

          {/* Telemetry Center */}
          <div className="text-center font-mono text-xs space-y-1 bg-cyber-dark/40 py-3 px-4 rounded border border-cyber-border/40">
            <div className="flex items-center justify-center gap-2 text-cyber-cyan">
              <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse"></span>
              <span>SYSTEM ONLINE // {personalData.systemVersion}</span>
            </div>
            <div className="text-cyber-muted text-[11px]">
              TIMESTAMP: <span className="text-cyber-text">{time || '2026-09-05 UTC'}</span>
            </div>
            <div className="text-cyber-muted text-[10px]">
              COORDINATES: 13.0827° N, 80.2707° E [TAMIL NADU, INDIA]
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href={personalData.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded bg-cyber-dark border border-cyber-border flex items-center justify-center text-cyber-text hover:text-cyber-neon hover:border-cyber-neon transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded bg-cyber-dark border border-cyber-border flex items-center justify-center text-cyber-text hover:text-cyber-cyan hover:border-cyber-cyan transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalData.contacts.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="w-8 h-8 rounded bg-cyber-dark border border-cyber-border flex items-center justify-center text-cyber-text hover:text-cyber-amber hover:border-cyber-amber transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.contacts.email}`}
                aria-label="Send Email"
                className="w-8 h-8 rounded bg-cyber-dark border border-cyber-border flex items-center justify-center text-cyber-text hover:text-cyber-neon hover:border-cyber-neon transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs font-mono text-cyber-muted hover:text-cyber-neon transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright & Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-cyber-muted">
          <div>
            © {new Date().getFullYear()} Mithun Anbazhagan. All systems secured.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>ENGINEERED WITH REACT + VITE + TAILWIND</span>
            <span>•</span>
            <span className="text-cyber-neon">GITHUB PAGES READY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
