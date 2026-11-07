import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Plus, Trash2, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TerminalEntry {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const { personal, skills, projects, achievements, experience, certifications } = PORTFOLIO_DATA;
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const initialWelcome: TerminalEntry = {
    id: 'msg-init',
    command: 'welcome',
    output: (
      <div className="space-y-1.5 text-[#cccccc]">
        <div className="text-white font-semibold">
          Bhavishya — Interactive Developer Terminal [VS Code Environment]
        </div>
        <p className="text-[#858585]">
          Explore my portfolio using the interactive terminal. Type <span className="text-[#00FF41] underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> to get started.
        </p>
      </div>
    )
  };

  const [entries, setEntries] = useState<TerminalEntry[]>([initialWelcome]);

  const quickCommands = [
    'help',
    'whoami',
    'about',
    'skills',
    'projects',
    'experience',
    'certifications',
    'achievements',
    'contact',
    'resume',
    'secret',
    'clear'
  ];

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [entries]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    setHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newId = `cmd-${Date.now()}`;
    let outputContent: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputContent = (
          <div className="space-y-2 text-xs">
            <div className="text-white font-semibold border-b border-[#3c3c3c] pb-1">
              AVAILABLE COMMANDS:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-[#cccccc]">
              <div><span className="text-[#00FF41] font-bold">help</span> — List all available commands</div>
              <div><span className="text-[#00FF41] font-bold">about</span> — Read professional introduction</div>
              <div><span className="text-[#00FF41] font-bold">whoami</span> — Identity, track & career goals</div>
              <div><span className="text-[#00FF41] font-bold">skills</span> — Categorized technical proficiencies</div>
              <div><span className="text-[#00FF41] font-bold">projects</span> — List active development projects</div>
              <div><span className="text-[#00FF41] font-bold">experience</span> — Internships and student roles</div>
              <div><span className="text-[#00FF41] font-bold">certifications</span> — Professional security credentials</div>
              <div><span className="text-[#00FF41] font-bold">achievements</span> — Learning milestones & labs</div>
              <div><span className="text-[#00FF41] font-bold">resume</span> — View or download resume PDF</div>
              <div><span className="text-[#00FF41] font-bold">contact</span> — Email and professional profile links</div>
              <div><span className="text-[#00FF41] font-bold">github</span> — Open GitHub repository link</div>
              <div><span className="text-[#00FF41] font-bold">linkedin</span> — Open LinkedIn network profile</div>
              <div><span className="text-[#00FF41] font-bold">secret</span> — Reveal core engineering philosophy</div>
              <div><span className="text-[#00FF41] font-bold">clear</span> (or <span className="text-[#00FF41] font-bold">cls</span>) — Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputContent = (
          <div className="space-y-2 text-xs text-[#cccccc] leading-relaxed">
            <div className="text-white font-semibold">About Bhavishya:</div>
            <p>{personal.summary}</p>
            <p>Career Direction: {personal.careerDirection}</p>
          </div>
        );
        break;

      case 'whoami':
        outputContent = (
          <div className="space-y-1.5 text-xs">
            <div className="text-white font-semibold">Developer Identity:</div>
            <div>Name: <span className="text-white">{personal.name}</span></div>
            <div>Education: <span className="text-[#cccccc]">{personal.education}</span></div>
            <div>Focus: <span className="text-[#00FF41]">Artificial Intelligence & Cybersecurity</span></div>
            <div className="pt-1 text-[#858585]">
              Interests: {personal.technicalInterests.join(', ')}
            </div>
          </div>
        );
        break;

      case 'skills':
        outputContent = (
          <div className="space-y-2 text-xs">
            <div className="text-white font-semibold">Technical Skills:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#cccccc]">
              {skills.map((group, idx) => (
                <div key={idx} className="p-2 rounded bg-[#1e1e1e] border border-[#3c3c3c]">
                  <div className="text-[#00FF41] font-bold text-[11px] mb-0.5">{group.category}</div>
                  <div>{group.skills.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        outputContent = (
          <div className="space-y-2 text-xs">
            <div className="text-white font-semibold">Featured Projects:</div>
            <div className="space-y-2">
              {projects.map((proj) => (
                <div key={proj.id} className="p-2 rounded bg-[#1e1e1e] border border-[#3c3c3c]">
                  <div className="flex items-center justify-between text-white font-bold">
                    <span>{proj.name}</span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#00FF41] hover:underline font-normal text-[11px]"
                    >
                      GitHub Repo ↗
                    </a>
                  </div>
                  <div className="text-[#cccccc] text-[11px] my-0.5">{proj.description}</div>
                  <div className="text-[#858585] text-[11px]">Stack: {proj.technologies.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'achievements':
        outputContent = (
          <div className="space-y-2 text-xs">
            <div className="text-white font-semibold">Learning Milestones:</div>
            <div className="space-y-1.5">
              {achievements.map((item) => (
                <div key={item.id} className="p-2 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#cccccc]">
                  <div className="text-white font-semibold">{item.title}</div>
                  <div className="text-[11px] text-[#858585]">{item.issuer} · {item.date}</div>
                  <p className="text-[11px] mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'experience':
        outputContent = (
          <div className="space-y-2 text-xs">
            <div className="text-white font-semibold">Experience & Roles:</div>
            <div className="space-y-1.5">
              {experience.map((item) => (
                <div key={item.id} className="p-2 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#cccccc]">
                  <div className="text-white font-semibold">{item.title || item.role}</div>
                  <div className="text-[11px] text-[#00FF41]">{item.organization || item.issuer} · {item.date}</div>
                  <p className="text-[11px] mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'certifications':
        outputContent = (
          <div className="space-y-2 text-xs">
            <div className="text-white font-semibold">Certifications & Credentials:</div>
            <div className="space-y-1.5">
              {certifications.map((item) => (
                <div key={item.id} className="p-2 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#cccccc]">
                  <div className="text-white font-semibold">{item.title}</div>
                  <div className="text-[11px] text-[#00FF41]">{item.issuer} · {item.date}</div>
                  <p className="text-[11px] mt-1">{item.description}</p>
                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] text-[#00FF41] hover:underline inline-block mt-0.5"
                    >
                      Verify Record ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        outputContent = (
          <div className="space-y-1.5 text-xs text-[#cccccc]">
            <div className="text-white font-semibold">Resume / Curriculum Vitae:</div>
            <p>Direct download available from the public directory:</p>
            <div>
              <a
                href={personal.resumeUrl || '/resume.pdf'}
                download="Bhavishya_Resume.pdf"
                className="text-[#00FF41] hover:underline font-semibold"
              >
                Download resume.pdf ↗
              </a>
            </div>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-xs text-[#cccccc]">
            <div className="text-white font-semibold">Contact & Profiles:</div>
            <div>Email: <a href={`mailto:${personal.email}`} className="text-[#00FF41] hover:underline">{personal.email}</a></div>
            <div>GitHub: <a href={personal.github} target="_blank" rel="noreferrer" className="text-[#00FF41] hover:underline">{personal.github}</a></div>
            <div>LinkedIn: <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-[#00FF41] hover:underline">{personal.linkedin}</a></div>
          </div>
        );
        break;

      case 'github':
        outputContent = (
          <div className="space-y-1 text-xs text-[#cccccc]">
            <div>Bhavishya on GitHub:</div>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#00FF41] hover:underline inline-block font-semibold"
            >
              https://github.com/bhavishyavashishtgit ↗
            </a>
          </div>
        );
        break;

      case 'linkedin':
        outputContent = (
          <div className="space-y-1 text-xs text-[#cccccc]">
            <div>Bhavishya on LinkedIn:</div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#00FF41] hover:underline inline-block font-semibold"
            >
              https://www.linkedin.com/in/bhavishya-vashisht-a93bba365 ↗
            </a>
          </div>
        );
        break;

      case 'secret':
        outputContent = (
          <div className="p-2.5 rounded bg-[#1e1e1e] border border-[#00FF41] space-y-1 text-xs">
            <div className="text-[#00FF41] font-semibold">Core Engineering Philosophy:</div>
            <blockquote className="text-white italic pl-2 border-l border-[#00FF41]">
              &ldquo;Every expert was once a beginner. Every vulnerability is an opportunity to learn, understand, and build something more secure.&rdquo;
            </blockquote>
          </div>
        );
        break;

      case 'cls':
      case 'clear':
        setEntries([]);
        setInputVal('');
        return;

      default:
        outputContent = (
          <div className="text-xs text-[#f48771] space-y-0.5">
            <div>bash: command not found: {cmdText}</div>
            <div className="text-[#858585]">Type <button onClick={() => executeCommand('help')} className="text-[#00FF41] underline">help</button> to see available commands.</div>
          </div>
        );
        break;
    }

    setEntries(prev => [
      ...prev,
      {
        id: newId,
        command: cmdText,
        output: outputContent
      }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < history.length) {
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const handleCopy = (id: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <section id="terminal" className="py-14 sm:py-20 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#00FF41] mb-1">04. INTERACTIVE CONSOLE</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <TerminalIcon className="w-6 h-6 text-[#00FF41]" />
            <span>Interactive Terminal</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#858585] mt-1 font-mono">
            Explore my portfolio using the interactive terminal. Type <code className="text-[#00FF41] font-bold">help</code> to get started.
          </p>
        </div>

        {/* Quick Command Directives Bar */}
        <div className="mb-3 flex flex-wrap items-center gap-1.5 p-2 rounded bg-[#252526] border border-[#3c3c3c]">
          <span className="text-[11px] font-mono text-[#858585] mr-1">QUICK COMMANDS:</span>
          {quickCommands.map(cmd => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 text-xs font-mono rounded bg-[#1e1e1e] hover:bg-[#3c3c3c] text-[#cccccc] hover:text-white transition-colors border border-[#3c3c3c]"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* VS Code Integrated Terminal Panel */}
        <div
          className="rounded border border-[#3c3c3c] bg-[#181818] overflow-hidden shadow-sm flex flex-col h-[460px]"
          onClick={() => inputRef.current?.focus()}
        >
          {/* VS Code Terminal Tabs Bar */}
          <div className="flex items-center justify-between px-3 py-1 bg-[#252526] border-b border-[#3c3c3c] text-xs font-mono select-none">
            {/* Panel Tabs */}
            <div className="flex items-center gap-4 text-[#858585]">
              <span className="hover:text-white cursor-pointer hidden sm:inline">PROBLEMS</span>
              <span className="hover:text-white cursor-pointer hidden sm:inline">OUTPUT</span>
              <span className="hover:text-white cursor-pointer hidden sm:inline">DEBUG CONSOLE</span>
              <div className="flex items-center gap-1.5 text-white font-semibold border-b-2 border-[#00FF41] pb-0.5 cursor-pointer">
                <span>TERMINAL</span>
                <span className="text-[10px] text-[#858585]">1: bash</span>
              </div>
            </div>

            {/* Terminal Actions */}
            <div className="flex items-center gap-2 text-[#858585]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand('help');
                }}
                className="hover:text-white p-1"
                title="Help"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand('clear');
                }}
                className="hover:text-white p-1"
                title="Clear Terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 overflow-y-auto p-4 font-mono text-xs sm:text-sm space-y-3">
            {entries.map((entry) => (
              <div key={entry.id} className="space-y-1">
                {entry.command !== 'welcome' && (
                  <div className="flex items-center justify-between text-xs text-[#858585]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF41]">bhavishya@dev:~$</span>
                      <span className="text-white font-semibold">{entry.command}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(entry.id, entry.command);
                      }}
                      className="text-[#858585] hover:text-white"
                      title="Copy command"
                    >
                      {copiedId === entry.id ? <Check className="w-3 h-3 text-[#00FF41]" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                )}
                <div className="text-[#cccccc]">{entry.output}</div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[#00FF41] shrink-0 font-semibold">bhavishya@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                className="w-full bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder:text-[#555555] focus:ring-0 p-0 caret-[#00FF41]"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Bottom Hint */}
          <div className="px-3 py-1.5 bg-[#1e1e1e] border-t border-[#3c3c3c] flex items-center justify-between text-[11px] font-mono text-[#858585]">
            <div>bash (x86_64-pc-linux-gnu) · Press Enter to execute</div>
            <div className="hidden sm:inline">Use ↑ and ↓ for history</div>
          </div>
        </div>

      </div>
    </section>
  );
};
