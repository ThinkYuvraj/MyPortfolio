import React, { useState, useEffect } from 'react';

function MobileQuickBar({ onOpenResume }) {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling past the first 300px
      if (window.scrollY > 300) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showBar) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-primary/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-fade-in"
    >
      <a
        href="#projects"
        className="px-2.5 py-1 text-[11px] font-bold text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
      >
        Projects
      </a>
      <span className="text-gray-600 text-[10px]">•</span>
      <a
        href="#roadmap"
        className="px-2.5 py-1 text-[11px] font-bold text-primary hover:bg-primary/10 rounded-full transition-all"
      >
        Horizon
      </a>
      <span className="text-gray-600 text-[10px]">•</span>
      <button
        onClick={onOpenResume}
        className="px-2.5 py-1 text-[11px] font-bold text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
      >
        Resume
      </button>
      <span className="text-gray-600 text-[10px]">•</span>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] hover:bg-primary hover:text-black transition-all ml-0.5"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </nav>
  );
}

export default MobileQuickBar;
