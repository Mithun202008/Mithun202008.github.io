import React from 'react';
import { Flag, Trophy, Shield, Code2, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (category) => {
    if (category.includes('Hackathon')) return Trophy;
    if (category.includes('Cybersecurity')) return Shield;
    if (category.includes('Algorithms')) return Code2;
    return Flag;
  };

  return (
    <section id="missions" className="relative py-20 z-10 border-t border-cyber-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-neon tracking-wider">
            <span>// 04</span>
            <span className="w-6 h-px bg-cyber-neon"></span>
            <span>MISSION TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-cyber-heading tracking-tight">
            Missions & Technical Activities
          </h2>
          <p className="text-xs sm:text-sm text-cyber-muted font-mono">
            Chronological audit log of hackathon qualifications, cybersecurity CTFs, and algorithmic practice.
          </p>
        </div>

        {/* Timeline Log Container */}
        <div className="relative border-l border-cyber-border ml-4 sm:ml-6 space-y-8">
          {achievementsData.map((item, index) => {
            const Icon = getIcon(item.category);
            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Node Glyph */}
                <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-cyber-card border border-cyber-border flex items-center justify-center group-hover:border-cyber-neon group-hover:shadow-neon-sm transition-all">
                  <span className="w-2 h-2 rounded-full bg-cyber-neon"></span>
                </div>

                {/* Mission Log Card */}
                <div className="p-5 rounded-lg bg-cyber-card/70 border border-cyber-border hover:border-cyber-neon/40 transition-all cyber-glass">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-cyber-border/60">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-cyber-dark text-cyber-neon">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-cyber-dark text-cyber-neon font-semibold text-[10px] border border-cyber-neon/30">
                        {item.status}
                      </span>
                      <span className="text-cyber-muted text-[11px] flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-cyber-heading group-hover:text-cyber-neon transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cyber-text/90 font-sans mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {item.link && (
                    <div className="mt-3 pt-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-amber hover:text-cyber-neon transition-colors"
                      >
                        <span>INSPECT LEETCODE TELEMETRY</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
