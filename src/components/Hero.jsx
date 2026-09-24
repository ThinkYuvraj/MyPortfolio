import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/portfolio';

const ROLES = [
  "Full-Stack Web Developer",
  "Software Developer Intern @ MarketinGlu",
  "MERN Stack Specialist (React & Node.js)",
  "RESTful API & Backend Architect"
];

function Hero({ onOpenResume }) {
  const { hero } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // Dynamic Intro Animation
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30, scale: 0.97, filter: "blur(8px)" },
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "expo.out" }
    );

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative z-10 pt-20 sm:pt-28 pb-10 sm:pb-16">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 md:w-[36rem] h-72 sm:h-80 md:h-[36rem] bg-primary/20 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse"></div>

      {/* Live Availability Badge */}
      <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-[11px] font-bold tracking-wide">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Open to Full-Time SDE & Engineering Roles (2026)</span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black uppercase leading-none tracking-tighter text-white italic">
        {hero.title}
        <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent not-italic uppercase block sm:inline ml-1 sm:ml-2">
          {hero.subtitle}
        </span>
      </h1>

      <div className="hero-content max-w-4xl mx-auto w-full">
        <div className="h-8 my-3 sm:my-4 md:my-5 flex items-center justify-center">
          <span className="px-3.5 sm:px-5 py-1 sm:py-1.5 md:py-2 rounded-full border border-primary/40 text-primary text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] bg-primary/10 text-glow transition-all duration-500 max-w-full truncate shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            {ROLES[roleIndex]}
          </span>
        </div>

        <p className="mt-2 sm:mt-3 md:mt-5 text-gray-300 text-xs sm:text-sm md:text-lg max-w-3xl mx-auto font-light tracking-wide leading-relaxed px-2">
          {hero.description}
        </p>

        {/* Quick Credential Chips */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-[11px] bg-white/5 border border-white/10 text-gray-300 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg flex items-center gap-1.5">
            <i className="fa-solid fa-graduation-cap text-primary"></i> Amity '26 (7.33 CGPA)
          </span>
          <span className="text-[10px] sm:text-[11px] bg-white/5 border border-white/10 text-gray-300 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg flex items-center gap-1.5">
            <i className="fa-solid fa-book-bookmark text-primary"></i> IEEE Xplore 1st-Author
          </span>
          <span className="text-[10px] sm:text-[11px] bg-white/5 border border-white/10 text-gray-300 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg flex items-center gap-1.5">
            <i className="fa-brands fa-aws text-amber-400"></i> AWS Academy Graduate
          </span>
          <span className="text-[10px] sm:text-[11px] bg-white/5 border border-white/10 text-gray-300 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg flex items-center gap-1.5">
            <i className="fa-solid fa-briefcase text-emerald-400"></i> SmartBridge & Jabsz Intern
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center w-full sm:w-auto px-2 sm:px-0">
          <a
            href="#roadmap"
            className="btn-shimmer px-6 sm:px-7 md:px-9 py-3 sm:py-3.5 bg-primary text-black font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_10px_35px_rgba(168,85,247,0.4)] text-center flex items-center justify-center gap-2"
          >
            <span>Career Roadmap</span>
            <i className="fa-solid fa-diagram-project text-xs"></i>
          </a>
          <button
            onClick={onOpenResume}
            className="px-6 sm:px-7 md:px-9 py-3 sm:py-3.5 glass border border-primary/50 text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-primary/20 hover:border-primary transition-all flex items-center justify-center gap-2"
          >
            <span>Verified Resume</span>
            <i className="fa-solid fa-file-invoice text-primary"></i>
          </button>
          <a
            href="#contact"
            className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white/5 border border-white/10 text-gray-300 font-bold uppercase text-xs tracking-widest rounded-xl hover:text-white hover:border-white/30 transition-all flex items-center justify-center gap-2"
          >
            <span>Contact</span>
            <i className="fa-regular fa-paper-plane text-xs"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
