import React from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData, personalData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 z-10 border-t border-cyber-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-neon tracking-wider">
              <span>// 05</span>
              <span className="w-6 h-px bg-cyber-neon"></span>
              <span>VERIFIED CLEARANCES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cyber-heading tracking-tight">
              Certifications & Credentials
            </h2>
            <p className="text-xs sm:text-sm text-cyber-muted font-mono">
              Accredited credentials across Python programming, systems, and database engineering.
            </p>
          </div>

          {/* Credly Profile Link Button */}
          <a
            href={personalData.contacts.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-cyber-dark border border-cyber-border hover:border-cyber-cyan text-cyber-cyan text-xs font-mono font-semibold transition-colors shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFY ON CREDLY</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-cyber-card/70 border border-cyber-border hover:border-cyber-neon/50 transition-all cyber-glass flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyber-border/60 text-xs font-mono">
                  <span className="text-cyber-neon font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.credentialId}</span>
                  </span>
                  <span className="text-cyber-muted">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-wider block">
                    {cert.domain}
                  </span>
                  <h3 className="text-lg font-bold text-cyber-heading group-hover:text-cyber-neon transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyber-muted font-mono">
                    Issuer: <strong className="text-cyber-text">{cert.issuer}</strong>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-cyber-border/60 flex items-center justify-between font-mono text-xs">
                <span className="text-[11px] text-cyber-muted">DIGITAL BADGE</span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyber-neon hover:underline font-semibold"
                >
                  <span>VIEW CREDENTIAL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
