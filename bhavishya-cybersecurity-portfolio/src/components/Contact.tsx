import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const subject = encodeURIComponent(`Portfolio Message from ${name || 'Colleague'}`);
    const body = encodeURIComponent(
      `Hi Bhavishya,\n\n${message}\n\n---\nFrom: ${name || 'Anonymous'}\nEmail: ${email || 'Not provided'}`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-10">
          <div className="text-xs font-mono text-[#00FF41] mb-1">06. CONNECT</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#858585] mt-1 max-w-xl">
            Feel free to reach out for internship opportunities, open-source collaboration, or software development discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Email Copy */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            
            {/* Email Card */}
            <div className="p-4 rounded border border-[#3c3c3c] bg-[#252526]">
              <div className="flex items-center gap-2 text-[#858585] mb-1">
                <Mail className="w-4 h-4 text-[#00FF41]" />
                <span className="text-white font-semibold">Email</span>
              </div>
              <div className="text-sm text-[#cccccc] my-2 break-all font-mono">
                {personal.email}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${personal.email}`}
                  className="px-3 py-1 rounded bg-[#00FF41] hover:bg-[#00cc33] text-[#0d1a0d] font-semibold transition-colors"
                >
                  Send Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded border border-[#3c3c3c] bg-[#1e1e1e] hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#00FF41]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded border border-[#3c3c3c] bg-[#252526] hover:border-[#00FF41] transition-colors flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-[#858585] group-hover:text-white transition-colors" />
                <div>
                  <div className="text-white font-semibold">GitHub Profile</div>
                  <div className="text-[11px] text-[#858585]">github.com/bhavishyavashishtgit</div>
                </div>
              </div>
              <span className="text-[#00FF41] group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded border border-[#3c3c3c] bg-[#252526] hover:border-[#00FF41] transition-colors flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-[#858585] group-hover:text-[#00FF41] transition-colors" />
                <div>
                  <div className="text-white font-semibold">LinkedIn Profile</div>
                  <div className="text-[11px] text-[#858585]">in/bhavishya-vashisht-a93bba365</div>
                </div>
              </div>
              <span className="text-[#00FF41] group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

          </div>

          {/* Right Column: Clean Developer Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded border border-[#3c3c3c] bg-[#252526]">
              <div className="text-xs font-mono font-bold text-white mb-4 pb-2 border-b border-[#3c3c3c]">
                Send a Message
              </div>

              {sent && (
                <div className="mb-4 p-3 rounded bg-[#1e1e1e] border border-[#00FF41] text-[#00FF41] text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Email client triggered with your message draft.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#858585] mb-1">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded px-3 py-2 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#00FF41]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#858585] mb-1">Your Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded px-3 py-2 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#00FF41]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#858585] mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note or opportunity details here..."
                    required
                    className="w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded px-3 py-2 text-white placeholder:text-[#555555] focus:outline-none focus:border-[#00FF41] resize-none"
                  />
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#00FF41] hover:bg-[#00cc33] text-[#0d1a0d] font-mono text-xs font-semibold transition-colors"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
