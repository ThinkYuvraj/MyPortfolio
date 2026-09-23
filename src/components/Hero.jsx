import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/portfolio';
import ResumeModal from './ResumeModal';

const ROLES = [
  "Full-Stack & AI Developer",
  "Software Developer Intern @ MarketinGlu",
  "MERN Stack Specialist",
  "RAG Systems & Backend Architect"
];

function Hero() {
  const { hero } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Dynamic Intro Animation
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "expo.out" }
    );

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10 pt-28 pb-16">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[32rem] h-72 md:h-[32rem] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>Full-Stack & AI Developer</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black uppercase leading-none tracking-tighter text-white italic">
          {hero.title}
          <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent not-italic uppercase block sm:inline ml-2">
            {hero.subtitle}
          </span>
        </h1>

        <div className="hero-content max-w-4xl mx-auto w-full">
          <div className="h-8 my-4 md:my-6 flex items-center justify-center">
            <span className="px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-primary/40 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] bg-primary/10 text-glow transition-all duration-500 max-w-full truncate">
              {ROLES[roleIndex]}
            </span>
          </div>

          <p className="mt-3 md:mt-6 text-gray-300 text-sm md:text-xl max-w-3xl mx-auto font-light tracking-wide leading-relaxed px-2">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
            <a href="#contact"
              className="btn-shimmer px-8 md:px-10 py-3.5 md:py-4 bg-primary text-black font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_10px_35px_rgba(168,85,247,0.4)] text-center">
              Start a Conversation <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="px-8 md:px-10 py-3.5 md:py-4 glass border border-primary/50 text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-primary/20 hover:border-primary transition-all flex items-center justify-center gap-2"
            >
              View Resume <i className="fa-solid fa-file-pdf"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeLink={hero.resumeLink}
      />
    </>
  );
}

export default Hero;
