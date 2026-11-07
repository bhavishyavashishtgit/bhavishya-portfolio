import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters: Matrix digital rain Katakana + numerals + latin
    const chars = '0123456789ABCDEF01234567890123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');

    const isMobile = width < 768;
    const fontSize = isMobile ? 14 : 12;
    let columns = Math.floor(width / (isMobile ? fontSize * 1.5 : fontSize));
    let drops: number[] = [];

    // Initialize drops
    const initDrops = () => {
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -50);
      }
    };

    initDrops();

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const mobile = width < 768;
      const size = mobile ? 14 : 12;
      columns = Math.floor(width / (mobile ? size * 1.5 : size));
      initDrops();
    };

    window.addEventListener('resize', handleResize);

    // If user prefers reduced motion, render a subtle static frame
    if (prefersReducedMotion) {
      ctx.fillStyle = '#1e1e1e';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = 'rgba(0, 255, 65, 0.15)';
      for (let i = 0; i < columns; i += 2) {
        for (let j = 0; j < height / fontSize; j += 4) {
          const char = charArray[Math.floor(Math.random() * charArray.length)];
          ctx.fillText(char, i * fontSize, j * fontSize);
        }
      }
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    // Frame pacing for smooth, lightweight animation
    let lastTime = 0;
    const frameInterval = isMobile ? 55 : 35; // Throttled on mobile for performance

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      const elapsed = currentTime - lastTime;
      if (elapsed < frameInterval) return;
      lastTime = currentTime - (elapsed % frameInterval);

      // Fade canvas slightly each frame for the rain trailing effect
      ctx.fillStyle = 'rgba(30, 30, 30, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * (isMobile ? fontSize * 1.5 : fontSize);
        const y = drops[i] * fontSize;

        // Head of drop is slightly brighter white-green, body is Matrix green #00FF41
        ctx.fillStyle = Math.random() > 0.88 ? '#eaffea' : '#00FF41';
        ctx.fillText(char, x, y);

        // Reset drop to top with randomized delay when it falls past bottom
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
};
