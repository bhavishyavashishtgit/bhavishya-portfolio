import React from 'react';
import { Code2, Shield, Cpu, Globe, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return Code2;
      case 'Cybersecurity':
        return Shield;
      case 'AI & Machine Learning':
        return Cpu;
      case 'Web Development':
        return Globe;
      case 'Tools & Technologies':
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-10">
          <div className="text-xs font-mono text-[#00FF41] mb-1">02. CAPABILITIES</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-xs sm:text-sm text-[#858585] mt-1 max-w-xl">
            Core competencies organized across programming languages, security concepts, machine learning, and developer tools.
          </p>
        </div>

        {/* Compact, Structured Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="p-5 rounded border border-[#3c3c3c] bg-[#252526] hover:border-[#00FF41] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#3c3c3c]">
                    <Icon className="w-4 h-4 text-[#00FF41]" />
                    <h3 className="text-sm font-bold text-white font-mono">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#cccccc] hover:text-white hover:border-[#00FF41] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-[#3c3c3c]/60 text-[11px] font-mono text-[#858585]">
                  {group.skills.length} skills listed
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
