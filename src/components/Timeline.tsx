import React, { useState, useMemo } from 'react';
import { ExternalLink, Edit2, Check, X, Award, Briefcase, Trophy, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, MilestoneItem } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const initialMilestones: MilestoneItem[] = useMemo(() => {
    const list: MilestoneItem[] = [];

    (PORTFOLIO_DATA.experience || []).forEach(e => {
      list.push({
        id: e.id,
        title: e.title || e.role || "Experience",
        issuer: e.organization || e.issuer || "Organization",
        date: e.date,
        type: 'experience',
        description: e.description,
        verificationUrl: e.verificationUrl,
        skillsGained: e.skillsGained,
        isPlaceholderUrl: e.isPlaceholderUrl
      });
    });

    (PORTFOLIO_DATA.certifications || []).forEach(c => {
      list.push({
        id: c.id,
        title: c.title,
        issuer: c.issuer,
        date: c.date,
        type: 'certification',
        description: c.description,
        verificationUrl: c.verificationUrl,
        isPlaceholderUrl: c.isPlaceholderUrl
      });
    });

    (PORTFOLIO_DATA.achievements || []).forEach(a => {
      list.push({
        id: a.id,
        title: a.title,
        issuer: a.issuer,
        date: a.date,
        type: 'achievement',
        description: a.description,
        verificationUrl: a.verificationUrl,
        isPlaceholderUrl: a.isPlaceholderUrl
      });
    });

    return list;
  }, []);

  const [items, setItems] = useState<MilestoneItem[]>(initialMilestones);
  const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'certification' | 'achievement'>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempUrl, setTempUrl] = useState('');

  const startEditUrl = (item: MilestoneItem) => {
    setEditingId(item.id);
    setTempUrl(item.verificationUrl || '');
  };

  const saveUrl = (id: string) => {
    setItems(prev =>
      prev.map(i => (i.id === id ? { ...i, verificationUrl: tempUrl, isPlaceholderUrl: false } : i))
    );
    setEditingId(null);
  };

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return items;
    return items.filter(i => i.type === activeFilter);
  }, [items, activeFilter]);

  const getTypeBadge = (type?: string) => {
    switch (type) {
      case 'experience':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#75beff]">
            <Briefcase className="w-3 h-3 text-[#75beff]" />
            <span>Experience</span>
          </span>
        );
      case 'certification':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#00FF41]">
            <Award className="w-3 h-3 text-[#00FF41]" />
            <span>Certification</span>
          </span>
        );
      case 'achievement':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#e5c07b]">
            <Trophy className="w-3 h-3 text-[#e5c07b]" />
            <span>Milestone</span>
          </span>
        );
    }
  };

  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-[#00FF41] mb-1">05. MILESTONES</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Experience & Achievements
            </h2>
            <p className="text-xs sm:text-sm text-[#858585] mt-1 max-w-xl">
              Hands-on cybersecurity labs, verified community leadership, certifications, and academic milestones.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded bg-[#252526] border border-[#3c3c3c] self-start sm:self-auto text-xs font-mono">
            <Filter className="w-3.5 h-3.5 text-[#858585] ml-1.5 hidden sm:inline" />
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#1e1e1e] text-[#00FF41] font-semibold border border-[#3c3c3c]'
                  : 'text-[#858585] hover:text-white'
              }`}
            >
              All ({items.length})
            </button>
            <button
              onClick={() => setActiveFilter('experience')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === 'experience'
                  ? 'bg-[#1e1e1e] text-[#00FF41] font-semibold border border-[#3c3c3c]'
                  : 'text-[#858585] hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveFilter('certification')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === 'certification'
                  ? 'bg-[#1e1e1e] text-[#00FF41] font-semibold border border-[#3c3c3c]'
                  : 'text-[#858585] hover:text-white'
              }`}
            >
              Certs
            </button>
            <button
              onClick={() => setActiveFilter('achievement')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === 'achievement'
                  ? 'bg-[#1e1e1e] text-[#00FF41] font-semibold border border-[#3c3c3c]'
                  : 'text-[#858585] hover:text-white'
              }`}
            >
              Labs
            </button>
          </div>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative border-l border-[#3c3c3c] ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline node dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#1e1e1e] border-2 border-[#00FF41] group-hover:scale-125 transition-transform" />

              <div className="p-4 sm:p-5 rounded border border-[#3c3c3c] bg-[#252526] hover:border-[#00FF41] transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-[#3c3c3c]">
                  <div className="space-y-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white font-mono">
                        {item.title}
                      </h3>
                      {getTypeBadge(item.type)}
                    </div>
                    <div className="text-xs text-[#00FF41] font-mono">
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

                {item.skillsGained && item.skillsGained.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.skillsGained.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#cccccc]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

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
