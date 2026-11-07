import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { MatrixBackground } from './components/MatrixBackground';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-150 ${isDark ? 'bg-[#1e1e1e] text-[#cccccc]' : 'bg-[#f3f3f3] text-[#1e1e1e]'}`}>
      {/* Subtle Matrix digital rain background */}
      <MatrixBackground />

      {/* Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* Section 2: About */}
        <About />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Projects */}
        <Projects />

        {/* Section 5: Experience & Timeline */}
        <Timeline />

        {/* Section 6: Interactive Terminal */}
        <Terminal />

        {/* Section 7: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
