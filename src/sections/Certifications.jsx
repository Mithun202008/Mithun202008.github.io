import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
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
              Accredited certifications across Python programming, Google AI competencies, and Anthropic LLM tooling.
            </p>
          </div>

          {/* Credly Profile Link */}
          <a
            href={personalData.contacts.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-cyber-dark border border-cyber-border hover:border-cyber-cyan text-cyber-cyan text-xs font-mono font-medium transition-colors shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-cyber-neon"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFY ON CREDLY</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Certifications 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-lg bg-cyber-card/75 border border-cyber-border hover:border-cyber-neon/60 transition-all duration-200 cyber-glass flex flex-col justify-between group hover:shadow-neon-sm"
            >
              <div>
                {/* Header: CERT // ID and Certificate Icon */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyber-border/60 text-xs font-mono">
                  <span className="text-cyber-neon font-bold tracking-wider">
                    CERT // {cert.id}
                  </span>
                  <div className="p-1.5 rounded bg-cyber-dark text-cyber-neon border border-cyber-border/80 group-hover:border-cyber-neon/40 transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-cyber-cyan uppercase tracking-wider">
                    {cert.level}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-cyber-heading group-hover:text-cyber-neon transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  
                  <div className="text-xs font-mono space-y-0.5 pt-1 text-cyber-muted">
                    <div className="text-cyber-heading font-medium">
                      {cert.issuer}
                    </div>
                    {cert.organization && cert.organization !== cert.issuer && (
                      <div className="text-cyber-muted text-[11px]">
                        {cert.organization}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-cyber-text/85 font-sans leading-relaxed pt-2">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Footer / Validity & Credential Link */}
              <div className="mt-6 pt-4 border-t border-cyber-border/60 flex items-center justify-between font-mono text-xs">
                <span className="text-[11px] text-cyber-muted">
                  {cert.validity || cert.issued}
                </span>

                {cert.url && cert.url !== '#' ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyber-neon/10 border border-cyber-neon/30 text-cyber-neon hover:bg-cyber-neon hover:text-cyber-void transition-colors text-[11px] font-semibold"
                  >
                    <span>VIEW CREDENTIAL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="px-2.5 py-1 rounded bg-cyber-dark border border-cyber-border text-cyber-muted text-[11px]">
                    VIEW CREDENTIAL
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
