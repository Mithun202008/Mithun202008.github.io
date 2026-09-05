import React, { useState } from 'react';
import { Search, Code2, Globe, Database, Shield, Cloud, Cpu, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', ...skillsData.map(s => s.category)];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming': return Code2;
      case 'Web & Full-Stack': return Globe;
      case 'Databases': return Database;
      case 'Cybersecurity & Systems': return Shield;
      case 'Development & Cloud': return Cloud;
      case 'AI & Data Science': return Cpu;
      default: return Code2;
    }
  };

  // Filter skills based on category and search query
  const filteredSkillGroups = skillsData
    .filter(group => selectedCategory === 'ALL' || group.category === selectedCategory)
    .map(group => {
      const matchingSkills = group.skills.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...group, skills: matchingSkills };
    })
    .filter(group => group.skills.length > 0);

  return (
    <section id="skills" className="relative py-20 z-10 border-t border-cyber-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-neon tracking-wider">
            <span>// 02</span>
            <span className="w-6 h-px bg-cyber-neon"></span>
            <span>TACTICAL MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-cyber-heading tracking-tight">
            Technical Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-cyber-muted font-mono">
            Practical skills verified through software implementations, systems deployment, and algorithmic practice.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyber-neon text-cyber-void font-bold shadow-neon-sm'
                    : 'bg-cyber-dark/80 border border-cyber-border text-cyber-text/80 hover:text-cyber-neon hover:border-cyber-neon/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Filter */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-cyber-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full bg-cyber-dark/90 border border-cyber-border rounded pl-9 pr-3 py-1.5 font-mono text-xs text-cyber-heading placeholder-cyber-muted/70 focus:outline-none focus:border-cyber-neon transition-colors"
            />
          </div>

        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkillGroups.map((group) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="p-5 rounded-lg bg-cyber-card/70 border border-cyber-border hover:border-cyber-neon/40 transition-all cyber-glass flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyber-border/70">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-cyber-dark text-cyber-neon">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-cyber-heading uppercase tracking-wider">
                        {group.category}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-cyber-muted bg-cyber-dark px-2 py-0.5 rounded border border-cyber-border/80">
                      SEC_{group.code}
                    </span>
                  </div>

                  {/* Skills List in Category */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded bg-cyber-dark/50 border border-cyber-border/40 hover:border-cyber-border hover:bg-cyber-dark/80 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-cyber-neon' : 'bg-cyber-cyan'}`}></span>
                          <span className="font-mono text-xs font-semibold text-cyber-heading">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-cyber-muted">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-cyber-border/40 flex items-center justify-between text-[10px] font-mono text-cyber-muted">
                  <span>VERIFIED TECHNICAL STACK</span>
                  <CheckCircle className="w-3 h-3 text-cyber-neon" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
