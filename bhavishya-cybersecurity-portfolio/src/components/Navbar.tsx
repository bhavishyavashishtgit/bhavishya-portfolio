import React, { useState } from 'react';
import { Github, FileText, Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenResumeModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Terminal", href: "#terminal" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#1e1e1e]/95 backdrop-blur-sm border-b border-[#3c3c3c] text-[#cccccc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-6">
        
        {/* Brand: Bhavishya */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono font-semibold text-sm tracking-tight text-white hover:text-[#00FF41] transition-colors shrink-0"
        >
          <span className="text-[#00FF41] font-bold">&lt;/&gt;</span>
          <span>Bhavishya</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium text-[#cccccc]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative hover:text-[#00FF41]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://github.com/bhavishyavashishtgit"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded hover:bg-[#252526] text-[#cccccc] hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded bg-[#00FF41] hover:bg-[#00cc33] text-[#0d1a0d] font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="p-1.5 rounded hover:bg-[#252526] text-[#858585] hover:text-white transition-colors"
            title="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="md:hidden p-1.5 rounded hover:bg-[#252526] text-[#cccccc] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#3c3c3c] bg-[#252526] px-4 py-3 space-y-2 text-xs font-mono">
          <div className="grid grid-cols-2 gap-1 pb-2 border-b border-[#3c3c3c]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded hover:bg-[#1e1e1e] text-[#cccccc] hover:text-[#00FF41] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <a
              href="https://github.com/bhavishyavashishtgit"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#00FF41] hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/bhavishyavashishtgit</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="px-2.5 py-1 text-xs rounded bg-[#00FF41] text-[#0d1a0d] font-semibold"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
