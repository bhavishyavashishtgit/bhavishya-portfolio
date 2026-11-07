import React, { useState } from 'react';
import { Folder, Github, ExternalLink, Edit2, Check, X } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [projectsList, setProjectsList] = useState<Project[]>(PORTFOLIO_DATA.projects);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempUrl, setTempUrl] = useState('');

  const startEditUrl = (proj: Project) => {
    setEditingId(proj.id);
    setTempUrl(proj.githubUrl);
  };

  const saveUrl = (id: string) => {
    setProjectsList(prev =>
      prev.map(p => (p.id === id ? { ...p, githubUrl: tempUrl, isGithubPlaceholder: false } : p))
    );
    setEditingId(null);
  };

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-10">
          <div className="text-xs font-mono text-[#00FF41] mb-1">03. WORK</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Projects & Builds
          </h2>
          <p className="text-xs sm:text-sm text-[#858585] mt-1 max-w-xl">
            Technical systems, AI security tooling, and student platforms built with real code and practical architecture.
          </p>
        </div>

        {/* GitHub / AWS Builder Center Style Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded border border-[#3c3c3c] bg-[#252526] hover:border-[#00FF41] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header: Folder Icon + Title + Links */}
                <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-[#3c3c3c]">
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-[#00FF41] shrink-0" />
                    <h3 className="text-base font-bold text-white font-mono hover:text-[#00FF41] transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub Repository`}
                      className="p-1 rounded hover:bg-[#1e1e1e] text-[#cccccc] hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} Live Demo`}
                        className="p-1 rounded hover:bg-[#1e1e1e] text-[#cccccc] hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* What Problem It Solves */}
                <div className="mb-3 text-xs">
                  <span className="font-mono text-[#00FF41] font-semibold block mb-1">
                    Problem Solved:
                  </span>
                  <p className="text-[#cccccc] leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Short Technical Description */}
                <div className="mb-4 text-xs">
                  <span className="font-mono text-[#858585] block mb-1">
                    Technical Overview:
                  </span>
                  <p className="text-[#cccccc] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#cccccc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Repo Link & Optional Placeholder Editor */}
              <div className="pt-3 border-t border-[#3c3c3c] text-xs font-mono">
                {editingId === project.id ? (
                  <div className="space-y-2">
                    <span className="text-white text-[11px]">Edit Repository URL:</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="url"
                        value={tempUrl}
                        onChange={(e) => setTempUrl(e.target.value)}
                        className="flex-1 bg-[#1e1e1e] border border-[#3c3c3c] rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-[#00FF41]"
                      />
                      <button
                        onClick={() => saveUrl(project.id)}
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
                  <div className="flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#00FF41] hover:underline flex items-center gap-1.5"
                    >
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    {project.isGithubPlaceholder && (
                      <button
                        onClick={() => startEditUrl(project)}
                        className="text-[11px] text-[#858585] hover:text-[#cccccc] flex items-center gap-1 underline"
                        title="Edit placeholder URL"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit URL</span>
                      </button>
                    )}
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
