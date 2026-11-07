import React from 'react';
import { GraduationCap, Shield, BookOpen, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-14 sm:py-20 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-10">
          <div className="text-xs font-mono text-[#00FF41] mb-1">01. OVERVIEW</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-xs sm:text-sm text-[#858585] mt-1 max-w-xl">
            A look into my background, technical interests, and what drives my development journey.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Career Direction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-5 rounded border border-[#3c3c3c] bg-[#252526] space-y-3.5">
              <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <span className="text-[#00FF41]">//</span> Background & Focus
              </h3>
              <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
                I am an Artificial Intelligence and Machine Learning student dedicated to building secure, dependable digital software. My journey started with a curiosity about how software systems operate under the hood and evolved into an active interest in cybersecurity and AI safety.
              </p>
              <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
                As machine learning models integrate deeper into web and enterprise applications, ensuring their robustness against prompt manipulation, adversarial inputs, and traditional software vulnerabilities is paramount. I focus on bridging secure systems design with modern developer tooling.
              </p>
            </div>

            {/* Career Direction Card */}
            <div className="p-5 rounded border border-[#3c3c3c] bg-[#252526] space-y-2">
              <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#00FF41]" />
                <span>Career Direction</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
                {personal.careerDirection}
              </p>
            </div>
          </div>

          {/* Right Column: Structured Cards (Education, Interests, Currently Learning) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Education */}
            <div className="p-4 rounded border border-[#3c3c3c] bg-[#252526] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00FF41]">
                <GraduationCap className="w-4 h-4 text-[#00FF41]" />
                <span className="font-semibold text-white">Education</span>
              </div>
              <p className="text-xs sm:text-sm text-[#cccccc]">
                {personal.education}
              </p>
              <p className="text-xs text-[#858585]">
                Specializing in AI/ML fundamentals, data structures, algorithms, and applied security labs.
              </p>
            </div>

            {/* Technical Interests */}
            <div className="p-4 rounded border border-[#3c3c3c] bg-[#252526] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00FF41]">
                <Shield className="w-4 h-4 text-[#00FF41]" />
                <span className="font-semibold text-white">Technical Interests</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {personal.technicalInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#cccccc]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* What I am Currently Learning */}
            <div className="p-4 rounded border border-[#3c3c3c] bg-[#252526] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00FF41]">
                <BookOpen className="w-4 h-4 text-[#00FF41]" />
                <span className="font-semibold text-white">What I Am Currently Learning</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#cccccc] pl-1 font-mono">
                {personal.currentFocus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#89d185]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
