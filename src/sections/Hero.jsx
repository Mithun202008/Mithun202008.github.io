import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail, Code2, ShieldCheck, Cpu, HardDrive, Box } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = personalData.rotatingRoles;

  // Typing effect for rotating roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-dark/80 border border-cyber-border text-xs font-mono text-cyber-muted">
              <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse"></span>
              <span className="text-cyber-heading font-semibold">ENGINEER // MITHUN ANBAZHAGAN</span>
              <span className="text-cyber-border">::</span>
              <span className="text-cyber-cyan">TAMIL NADU, IN</span>
            </div>

            {/* Main Greeting Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cyber-heading">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon via-cyber-emerald to-cyber-cyan">Mithun.</span>
              </h1>

              {/* Dynamic Rotating Role */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-xl sm:text-2xl text-cyber-cyan font-bold flex items-center">
                  &gt;&nbsp;{displayText}
                  <span className="w-2.5 h-6 bg-cyber-neon ml-1 animate-pulse inline-block"></span>
                </span>
              </div>
            </div>

            {/* Short Technical Introduction */}
            <p className="text-base sm:text-lg text-cyber-text/90 max-w-2xl font-sans leading-relaxed">
              {personalData.bioHeadline} Specializing in high-concurrency CLI tooling, 3D modeling in Blender, secure network systems, and cloud infrastructure.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded bg-cyber-neon text-cyber-void font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-cyber-emerald transition-all shadow-neon-md hover:shadow-neon-lg hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded bg-cyber-card border border-cyber-border hover:border-cyber-neon text-cyber-heading font-mono text-xs sm:text-sm font-semibold tracking-wider hover:text-cyber-neon transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyber-neon" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs font-mono text-cyber-muted tracking-wider">CHANNELS:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalData.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-cyber-dark/80 border border-cyber-border text-cyber-text hover:text-cyber-neon hover:border-cyber-neon transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalData.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-cyber-dark/80 border border-cyber-border text-cyber-text hover:text-cyber-cyan hover:border-cyber-cyan transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalData.contacts.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-cyber-dark/80 border border-cyber-border text-cyber-text hover:text-cyber-amber hover:border-cyber-amber transition-colors"
                  aria-label="LeetCode"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.contacts.email}`}
                  className="p-2 rounded bg-cyber-dark/80 border border-cyber-border text-cyber-text hover:text-cyber-neon hover:border-cyber-neon transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Futuristic Telemetry Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg bg-cyber-card/90 border border-cyber-border shadow-2xl p-4 sm:p-5 font-mono overflow-hidden cyber-glass">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-cyber-border/70 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyber-neon"></div>
                  <span className="text-cyber-heading font-bold">SYSTEM TELEMETRY</span>
                </div>
                <span className="text-[10px] text-cyber-neon font-semibold px-2 py-0.5 rounded bg-cyber-dark border border-cyber-neon/30">
                  ACTIVE
                </span>
              </div>

              {/* Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 my-3.5 text-xs">
                <div className="p-2.5 rounded bg-cyber-dark/70 border border-cyber-border/60">
                  <div className="flex items-center justify-between text-cyber-muted text-[10px]">
                    <span>STATUS</span>
                    <ShieldCheck className="w-3 h-3 text-cyber-neon" />
                  </div>
                  <div className="text-cyber-neon font-bold mt-1">ONLINE / READY</div>
                </div>

                <div className="p-2.5 rounded bg-cyber-dark/70 border border-cyber-border/60">
                  <div className="flex items-center justify-between text-cyber-muted text-[10px]">
                    <span>ENVIRONMENT</span>
                    <Cpu className="w-3 h-3 text-cyber-cyan" />
                  </div>
                  <div className="text-cyber-heading font-bold mt-1">LINUX / POSIX</div>
                </div>

                <div className="p-2.5 rounded bg-cyber-dark/70 border border-cyber-border/60">
                  <div className="flex items-center justify-between text-cyber-muted text-[10px]">
                    <span>ACADEMIC</span>
                    <HardDrive className="w-3 h-3 text-cyber-amber" />
                  </div>
                  <div className="text-cyber-heading font-bold mt-1">B.E. CSE (CIT)</div>
                </div>

                <div className="p-2.5 rounded bg-cyber-dark/70 border border-cyber-border/60">
                  <div className="flex items-center justify-between text-cyber-muted text-[10px]">
                    <span>3D MODELING</span>
                    <Box className="w-3 h-3 text-cyber-neon" />
                  </div>
                  <div className="text-cyber-cyan font-bold mt-1">BLENDER SUITE</div>
                </div>
              </div>

              {/* Clean Output Stream */}
              <div className="p-3.5 rounded bg-cyber-void/90 border border-cyber-border/80 text-[11px] space-y-2 text-cyber-muted">
                <div className="text-cyber-cyan font-semibold">
                  $ verify-system-capabilities
                </div>
                <div className="text-cyber-text/80 pl-2">
                  [✓] Core Tool: <span className="text-cyber-neon">PROXC (Proxy Validator CLI)</span>
                </div>
                <div className="text-cyber-text/80 pl-2">
                  [✓] Submission: <span className="text-cyber-neon">Kali Linux Bug Tracker</span>
                </div>
                <div className="text-cyber-text/80 pl-2">
                  [✓] 3D Asset Pipeline: <span className="text-cyber-amber">Blender Modeling</span>
                </div>
                <div className="text-cyber-text/80 pl-2">
                  [✓] Algorithmic DSA: <span className="text-cyber-cyan">370+ LeetCode Solved</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyber-neon pt-1">
                  <span>&gt; status: open for opportunities</span>
                  <span className="w-1.5 h-3 bg-cyber-neon animate-pulse inline-block"></span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
