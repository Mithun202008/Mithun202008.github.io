import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const availableDomains = Array.from(new Set(projectsData.map((p) => p.domain)));
  const filterOptions = ['ALL', 'FEATURED', ...availableDomains];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FEATURED') return project.featured;
    return project.domain.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="projects" className="relative py-20 z-10 border-t border-cyber-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-neon tracking-wider">
              <span>// 03</span>
              <span className="w-6 h-px bg-cyber-neon"></span>
              <span>PRIMARY DIRECTIVES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cyber-heading tracking-tight">
              Mission Files & Engineered Systems
            </h2>
            <p className="text-xs sm:text-sm text-cyber-muted font-mono">
              Real software projects spanning network tooling, high-scale data virtualization, and full-stack web applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-3 py-1 rounded transition-all ${
                  activeFilter === opt
                    ? 'bg-cyber-neon text-cyber-void font-bold shadow-neon-sm'
                    : 'bg-cyber-dark/80 border border-cyber-border text-cyber-text/80 hover:text-cyber-neon'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Project Mission Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg bg-cyber-card/80 border transition-all duration-300 flex flex-col justify-between group cyber-glass ${
                project.featured 
                  ? 'border-cyber-neon/40 hover:border-cyber-neon hover:shadow-neon-sm' 
                  : 'border-cyber-border hover:border-cyber-cyan/50 hover:shadow-cyan-sm'
              }`}
            >
              
              {/* Card Header with Mission ID & Status */}
              <div className="p-5 pb-0">
                <div className="flex items-center justify-between pb-3 border-b border-cyber-border/70 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-neon font-bold">
                      MISSION // {project.id}
                    </span>
                    {project.featured && (
                      <span className="px-1.5 py-0.2 text-[9px] font-semibold bg-cyber-neon/20 text-cyber-neon rounded border border-cyber-neon/30">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-cyber-cyan px-2 py-0.5 rounded bg-cyber-dark border border-cyber-border">
                    {project.status}
                  </span>
                </div>

                {/* Domain & Title */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-mono text-cyber-muted tracking-wider uppercase block">
                    {project.domain}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-cyber-heading group-hover:text-cyber-neon transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyber-text/85 font-sans leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>
                </div>

                {/* Optional Project Image / 3D Render Banner */}
                {project.image && (
                  <div className="mt-3 relative rounded overflow-hidden aspect-video border border-cyber-border/80 bg-cyber-dark group-hover:border-cyber-neon/40 transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-cyber-void/85 text-[10px] font-mono text-cyber-neon border border-cyber-border">
                      3D RENDER
                    </div>
                  </div>
                )}
              </div>

              {/* Card Tech Stack & Actions */}
              <div className="p-5 pt-4 space-y-4">
                
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-cyber-dark text-[11px] font-mono text-cyber-text/80 border border-cyber-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-cyber-dark text-[10px] font-mono text-cyber-muted border border-cyber-border">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-cyber-border/60 flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 text-cyber-cyan hover:text-cyber-neon font-semibold transition-colors"
                  >
                    <span>INSPECT SPECS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded hover:bg-cyber-surface text-cyber-muted hover:text-cyber-heading transition-colors"
                        title="View Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded hover:bg-cyber-surface text-cyber-neon transition-colors"
                        title="Launch Live System"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
