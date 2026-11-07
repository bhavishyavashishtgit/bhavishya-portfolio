import React from 'react';
import { ArrowDown, Github, FileText, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="py-14 sm:py-20 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Developer Introduction */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block font-mono text-xs text-[#00FF41] bg-[#252526] px-2.5 py-1 rounded border border-[#3c3c3c]">
              {personal.bioGreeting}
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {personal.bioHeadline}
              </h1>
              <p className="text-sm sm:text-base font-mono text-[#00FF41] font-medium">
                {personal.role}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#cccccc] leading-relaxed max-w-xl">
              {personal.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-semibold bg-[#00FF41] hover:bg-[#00cc33] text-[#0d1a0d] transition-colors"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium border border-[#3c3c3c] bg-[#252526] hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-[#858585]" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.resumeUrl || "/resume.pdf"}
                download="Bhavishya_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium border border-[#3c3c3c] bg-[#252526] hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white transition-colors"
                title="Download verified resume PDF"
              >
                <FileText className="w-4 h-4 text-[#00FF41]" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-mono text-[#858585] hover:text-[#cccccc] hover:bg-[#252526] transition-colors"
                title="Preview text resume dossier"
              >
                <span>[Preview CV]</span>
              </button>
            </div>

            {/* Quick Developer Specs Strip */}
            <div className="pt-4 border-t border-[#3c3c3c] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#858585]">
              <div>
                <span className="text-[#cccccc]">Focus:</span> AI Security & Systems
              </div>
              <div>
                <span className="text-[#cccccc]">Stack:</span> Python, React, FastAPI, PostgreSQL
              </div>
              <div>
                <span className="text-[#00FF41]">●</span> Open to opportunities
              </div>
            </div>
          </div>

          {/* Right Column: Clean VS Code Code Window */}
          <div className="lg:col-span-5">
            <div className="rounded border border-[#3c3c3c] bg-[#252526] overflow-hidden shadow-sm">
              {/* Editor Tab Bar */}
              <div className="flex items-center justify-between bg-[#1e1e1e] border-b border-[#3c3c3c] px-3 py-1.5 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#252526] border-t-2 border-[#00FF41] text-white rounded-t">
                    <Code2 className="w-3.5 h-3.5 text-[#00FF41]" />
                    <span>developer.json</span>
                  </div>
                </div>
                <div className="text-[11px] text-[#858585]">UTF-8 · TypeScript</div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-4 font-mono text-xs text-[#cccccc] space-y-1 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-[#858585]">1</span> <span className="text-[#00FF41]">interface</span> <span className="text-[#89d185]">SoftwareEngineer</span> &#123;
                </div>
                <div>
                  <span className="text-[#858585]">2</span> &nbsp;&nbsp;name: <span className="text-[#ce9178]">&quot;Bhavishya&quot;</span>;
                </div>
                <div>
                  <span className="text-[#858585]">3</span> &nbsp;&nbsp;track: <span className="text-[#ce9178]">&quot;AI & ML Undergraduate&quot;</span>;
                </div>
                <div>
                  <span className="text-[#858585]">4</span> &nbsp;&nbsp;interests: [
                </div>
                <div>
                  <span className="text-[#858585]">5</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ce9178]">&quot;AI Security & LLM Defense&quot;</span>,
                </div>
                <div>
                  <span className="text-[#858585]">6</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ce9178]">&quot;Cybersecurity Fundamentals&quot;</span>,
                </div>
                <div>
                  <span className="text-[#858585]">7</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ce9178]">&quot;Full-Stack Engineering&quot;</span>
                </div>
                <div>
                  <span className="text-[#858585]">8</span> &nbsp;&nbsp;];
                </div>
                <div>
                  <span className="text-[#858585]">9</span> &nbsp;&nbsp;seeking: <span className="text-[#ce9178]">&quot;Learning & Internship Roles&quot;</span>;
                </div>
                <div>
                  <span className="text-[#858585]">10</span> &#125;
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-3 py-1 bg-[#1a331a] border-t border-[#00FF41]/30 text-[#00FF41] text-[11px] font-mono">
                <div className="flex items-center gap-3">
                  <span>main*</span>
                  <span>0 errors · 0 warnings</span>
                </div>
                <div>TypeScript React</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
