import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText, Info } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { personal, skills, projects, achievements } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textDossier = `
BHAVISHYA
AI & ML Student | Cybersecurity Enthusiast | Developer
Email: ${personal.email}
GitHub: ${personal.github}
LinkedIn: ${personal.linkedin}

SUMMARY:
${personal.summary}

EDUCATION:
${personal.education}

TECHNICAL SKILLS:
${skills.map(s => `${s.category}: ${s.skills.join(', ')}`).join('\n')}

SELECTED PROJECTS:
${projects.map(p => `• ${p.name}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

EXPERIENCE & ACHIEVEMENTS:
${achievements.map(a => `• ${a.title} (${a.issuer}, ${a.date}) - ${a.description}`).join('\n')}
`.trim();

    navigator.clipboard.writeText(textDossier);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="print-container max-w-3xl w-full my-8 rounded border border-[#3c3c3c] bg-[#1e1e1e] text-[#cccccc] shadow-2xl relative font-sans">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#3c3c3c] bg-[#252526] sticky top-0 z-10 font-mono text-xs">
          <div className="flex items-center gap-2 text-white">
            <FileText className="w-4 h-4 text-[#00FF41]" />
            <span className="font-semibold">resume.md — Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#3c3c3c] bg-[#1e1e1e] hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00FF41]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00FF41] hover:bg-[#00cc33] text-[#0d1a0d] font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-[#858585] hover:text-white rounded"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
          
          {/* Note Banner */}
          <div className="p-3 rounded bg-[#252526] border border-[#3c3c3c] text-[#858585] text-xs font-mono flex items-start gap-2">
            <Info className="w-4 h-4 text-[#00FF41] shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-semibold">Resume Profile:</span> Below is Bhavishya&apos;s verified curriculum vitae. You can print, copy to clipboard, or drop a custom PDF to <code className="text-[#cccccc] bg-[#1e1e1e] px-1 py-0.5 rounded">public/resume.pdf</code>.
            </div>
          </div>

          {/* Header */}
          <div className="border-b border-[#3c3c3c] pb-4">
            <h1 className="text-2xl font-bold text-white tracking-tight">{personal.name}</h1>
            <p className="font-mono text-xs text-[#00FF41] mt-0.5">{personal.role}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#858585] mt-2">
              <span>Email: {personal.email}</span>
              <span>GitHub: github.com/bhavishyavashishtgit</span>
              <span>LinkedIn: in/bhavishya-vashisht-a93bba365</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1">
            <h2 className="text-xs font-mono font-bold text-[#00FF41] uppercase tracking-wider">
              Education
            </h2>
            <div className="p-3 rounded bg-[#252526] border border-[#3c3c3c]">
              <div className="font-bold text-white text-xs">{personal.education}</div>
              <div className="text-xs text-[#858585]">Focus on artificial intelligence, algorithmic problem solving, and cybersecurity.</div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-1">
            <h2 className="text-xs font-mono font-bold text-[#00FF41] uppercase tracking-wider">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {skills.map((s, i) => (
                <div key={i} className="p-2.5 rounded bg-[#252526] border border-[#3c3c3c]">
                  <span className="font-bold text-white block mb-0.5">{s.category}</span>
                  <span className="text-[#858585]">{s.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#00FF41] uppercase tracking-wider">
              Selected Technical Projects
            </h2>
            <div className="space-y-2 text-xs">
              {projects.map((p) => (
                <div key={p.id} className="p-3 rounded bg-[#252526] border border-[#3c3c3c] space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <span className="font-bold text-white">{p.name}</span>
                    <span className="text-[#00FF41] text-[11px]">{p.technologies.slice(0, 3).join(' · ')}</span>
                  </div>
                  <p className="text-[#cccccc]">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#00FF41] uppercase tracking-wider">
              Experience & Achievements
            </h2>
            <div className="space-y-2 text-xs">
              {achievements.map((a) => (
                <div key={a.id} className="p-3 rounded bg-[#252526] border border-[#3c3c3c] flex justify-between items-start font-mono">
                  <div>
                    <div className="font-semibold text-white">{a.title}</div>
                    <div className="text-[11px] text-[#858585]">{a.issuer} — {a.description}</div>
                  </div>
                  <span className="text-[11px] text-[#858585] shrink-0 ml-4">{a.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#3c3c3c] bg-[#252526] flex items-center justify-between font-mono text-xs">
          <span className="text-[#858585]">Bhavishya · Verified Developer Profile</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-[#3c3c3c] text-white hover:bg-[#4a4a4a]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
