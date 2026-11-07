import React, { useState } from 'react';
import { ExternalLink, Edit2, Check, X } from 'lucide-react';
import { PORTFOLIO_DATA, Achievement } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const [items, setItems] = useState<Achievement[]>(PORTFOLIO_DATA.achievements);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempUrl, setTempUrl] = useState('');

  const startEditUrl = (item: Achievement) => {
    setEditingId(item.id);
    setTempUrl(item.verificationUrl || '');
  };

  const saveUrl = (id: string) => {
    setItems(prev =>
      prev.map(i => (i.id === id ? { ...i, verificationUrl: tempUrl, isPlaceholderUrl: false } : i))
    );
    setEditingId(null);
  };

  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-10">
          <div className="text-xs font-mono text-[#00FF41] mb-1">05. MILESTONES</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience & Achievements
          </h2>
          <p className="text-xs sm:text-sm text-[#858585] mt-1 max-w-xl">
            Hands-on cybersecurity labs, verified community leadership, and academic milestones.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative border-l border-[#3c3c3c] ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline node dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#1e1e1e] border-2 border-[#00FF41] group-hover:scale-125 transition-transform" />

              <div className="p-4 sm:p-5 rounded border border-[#3c3c3c] bg-[#252526] hover:border-[#00FF41] transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-[#3c3c3c]">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-mono">
                      {item.title}
                    </h3>
                    <div className="text-xs text-[#00FF41] font-mono mt-0.5">
                      {item.issuer}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#858585]">
                    {item.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Verification link and editor */}
                {editingId === item.id ? (
                  <div className="p-2.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] space-y-2 mt-2 font-mono text-xs">
                    <span className="text-white text-[11px]">Edit Verification URL:</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="url"
                        value={tempUrl}
                        onChange={(e) => setTempUrl(e.target.value)}
                        className="flex-1 bg-[#252526] border border-[#3c3c3c] rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-[#00FF41]"
                      />
                      <button
                        onClick={() => saveUrl(item.id)}
                        className="p-1 rounded bg-[#00FF41] text-[#0d1a0d] font-semibold"
                        title="Save URL"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="p-1 rounded bg-[#3c3c3c] text-[#cccccc]"
                        title="Cancel"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs font-mono pt-1">
                    {item.verificationUrl ? (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#00FF41] hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>Verify Record</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[#858585]">Academic Record</span>
                    )}

                    <button
                      onClick={() => startEditUrl(item)}
                      className="text-[11px] text-[#858585] hover:text-[#cccccc] inline-flex items-center gap-1"
                      title="Edit URL"
                    >
                      <Edit2 className="w-3 h-3" />
                      <span>Edit Link</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
