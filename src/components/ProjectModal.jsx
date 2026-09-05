import React from 'react';
import { X, ExternalLink, Github, Shield, Terminal, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-cyber-card border border-cyber-border rounded-lg shadow-2xl shadow-cyber-neon/15 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-cyber-dark px-5 py-4 border-b border-cyber-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-cyber-neon bg-cyber-surface px-2 py-0.5 rounded border border-cyber-border">
              MISSION // {project.id}
            </span>
            <span className="font-mono text-xs text-cyber-cyan font-semibold">
              [{project.status}]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-cyber-surface text-cyber-muted hover:text-cyber-heading transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <span className="text-[11px] font-mono text-cyber-muted uppercase tracking-wider block mb-1">
              Domain // {project.domain}
            </span>
            <h2 className="text-xl font-bold text-cyber-heading tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-cyber-neon/90 font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Project Image / 3D Render Feature */}
          {project.image && (
            <div className="relative rounded overflow-hidden aspect-video border border-cyber-border bg-cyber-dark">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-cyber-void/90 text-xs font-mono text-cyber-neon border border-cyber-border">
                BLENDER 3D CYCLES RENDER
              </div>
            </div>
          )}

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-2.5 rounded bg-cyber-dark/80 border border-cyber-border/80 text-center">
                  <div className="text-[10px] font-mono text-cyber-muted">METRIC_{i+1}</div>
                  <div className="text-xs font-mono font-semibold text-cyber-heading mt-0.5 truncate" title={metric}>
                    {metric}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold text-cyber-cyan uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              Technical Architecture & Engineering Details
            </h3>
            <p className="text-sm text-cyber-text leading-relaxed bg-cyber-dark/50 p-3.5 rounded border border-cyber-border/60">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold text-cyber-muted uppercase tracking-wider">
              Integrated Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-cyber-surface text-cyber-text text-xs font-mono border border-cyber-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="bg-cyber-dark px-6 py-3.5 border-t border-cyber-border flex items-center justify-between">
          <span className="text-[11px] font-mono text-cyber-muted">
            SYS_FILE_ID: {project.slug}
          </span>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded bg-cyber-surface border border-cyber-border hover:border-cyber-neon text-cyber-heading text-xs font-mono transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>SOURCE CODE</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded bg-cyber-neon text-cyber-void font-bold text-xs font-mono hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>LIVE SYSTEM</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
