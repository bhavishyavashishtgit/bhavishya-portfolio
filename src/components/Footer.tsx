import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#3c3c3c] bg-[#1e1e1e] text-[#858585] py-10 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#3c3c3c]">
          <div>
            <div className="text-white font-bold text-sm flex items-center gap-2">
              <span className="text-[#00FF41]">&lt;/&gt;</span>
              <span>Bhavishya</span>
            </div>
            <p className="text-[#858585] mt-0.5">
              AI & ML Student · Cybersecurity Enthusiast · Developer
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded border border-[#3c3c3c] hover:bg-[#252526] text-[#cccccc] hover:text-white transition-colors flex items-center gap-1.5"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Links & Socials Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="text-white font-semibold mb-2">Navigation</div>
            <div className="space-y-1 text-[#858585]">
              <div><a href="#about" className="hover:text-white transition-colors">About</a></div>
              <div><a href="#skills" className="hover:text-white transition-colors">Skills</a></div>
              <div><a href="#projects" className="hover:text-white transition-colors">Projects</a></div>
              <div><a href="#experience" className="hover:text-white transition-colors">Experience</a></div>
              <div><a href="#terminal" className="hover:text-white transition-colors">Terminal</a></div>
              <div><a href="#contact" className="hover:text-white transition-colors">Contact</a></div>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-2">Connect</div>
            <div className="space-y-1 text-[#858585]">
              <div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
              <div>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-2">Deployment</div>
            <p className="text-[#858585] leading-relaxed">
              Configured for AWS Amplify Hosting with continuous integration via GitHub and automated builds with Vite.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#3c3c3c]/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#858585] text-[11px]">
          <div>
            © {new Date().getFullYear()} Bhavishya. All rights reserved.
          </div>
          <div>
            Designed with VS Code dark palette & React
          </div>
        </div>

      </div>
    </footer>
  );
};
