import React from 'react';
import { Shield, Cpu, Cloud, Box, GraduationCap } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Cloud,
      title: "Cloud & Linux Systems",
      desc: "Deep interest in distributed cloud architectures, POSIX environments, shell automation, and Linux server deployment."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Tooling",
      desc: "Author of network proxy validation tooling (PROXC) submitted to Kali Linux Bug Tracker; active participant in CTF security challenges."
    },
    {
      icon: Cpu,
      title: "Concurrent Software",
      desc: "Designing multithreaded backend tools, protocol validators (HTTP, SOCKS4/5), and automated testing suites."
    },
    {
      icon: Box,
      title: "3D Design & Modeling",
      desc: "Crafting original 3D models, scene environments, lighting, and assets utilizing Blender."
    }
  ];

  return (
    <section id="about" className="relative py-20 z-10 border-t border-cyber-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-neon tracking-wider">
            <span>// 01</span>
            <span className="w-6 h-px bg-cyber-neon"></span>
            <span>SYSTEM PROFILE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-cyber-heading tracking-tight">
            About the Engineer
          </h2>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Biometric Photo Frame on Left/Center */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 sm:w-72 p-2 rounded-lg bg-cyber-card border border-cyber-border cyber-glass group">
              
              {/* Corner Tactical Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-neon"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-neon"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-neon"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-neon"></div>

              {/* Photo Wrapper */}
              <div className="relative rounded overflow-hidden aspect-square border border-cyber-border/70 bg-cyber-dark">
                <img
                  src="./photocopy.jpeg"
                  alt="Mithun Anbazhagan"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Subtle Scanline Bar */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-neon/15 to-transparent h-12 w-full animate-scanline pointer-events-none"></div>

                {/* Photo ID Overlay Badge */}
                <div className="absolute bottom-2 left-2 right-2 bg-cyber-void/90 backdrop-blur-md px-2.5 py-1.5 rounded border border-cyber-border text-center font-mono text-[10px]">
                  <span className="text-cyber-neon font-bold">MITHUN ANBAZHAGAN</span>
                  <div className="text-cyber-muted text-[9px]">CSE // CHENNAI INST. OF TECH</div>
                </div>
              </div>

              {/* Bio Metadata below photo */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-mono text-cyber-muted">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>B.E. CSE (2025–2029)</span>
                </span>
                <span className="text-cyber-neon font-bold">CGPA 8.55</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Narrative & Strategic Pillars */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="prose prose-invert max-w-none text-cyber-text text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                I am a second-year <strong className="text-cyber-heading">Computer Science and Engineering</strong> student at <strong className="text-cyber-cyan">Chennai Institute of Technology</strong> with a strong academic standing (<strong className="text-cyber-neon">8.55 / 10 CGPA</strong>).
              </p>
              <p>
                My focus centers on practical engineering: building functional open-source command-line software, exploring network security protocols, creating 3D models with Blender, and deploying cloud-native web architectures. Rather than theoretical projects, I design real software tools with multi-platform installers, automated test suites, and clean documentation.
              </p>
            </div>

            {/* Engineering Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-cyber-card/60 border border-cyber-border hover:border-cyber-neon/50 transition-all hover:bg-cyber-card group"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded bg-cyber-dark text-cyber-neon group-hover:text-cyber-cyan transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-mono text-xs sm:text-sm font-bold text-cyber-heading">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-cyber-muted font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 font-mono">
              <div className="p-2.5 rounded bg-cyber-dark/80 border border-cyber-border text-center">
                <div className="text-lg font-bold text-cyber-neon">8.55</div>
                <div className="text-[10px] text-cyber-muted tracking-wider">ACADEMIC CGPA</div>
              </div>
              <div className="p-2.5 rounded bg-cyber-dark/80 border border-cyber-border text-center">
                <div className="text-lg font-bold text-cyber-cyan">370+</div>
                <div className="text-[10px] text-cyber-muted tracking-wider">LEETCODE PROBLEMS</div>
              </div>
              <div className="p-2.5 rounded bg-cyber-dark/80 border border-cyber-border text-center">
                <div className="text-lg font-bold text-cyber-amber">BLENDER</div>
                <div className="text-[10px] text-cyber-muted tracking-wider">3D MODELING</div>
              </div>
              <div className="p-2.5 rounded bg-cyber-dark/80 border border-cyber-border text-center">
                <div className="text-lg font-bold text-cyber-text">PROXC</div>
                <div className="text-[10px] text-cyber-muted tracking-wider">KALI TOOL REQUEST</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
