import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/portfolio';
import ResumeModal from './ResumeModal';

const ROLES = [
  "FULL-STACK WEB DEVELOPER",
  "SOFTWARE DEVELOPER INTERN @ MARKETINGLU",
  "MERN STACK SPECIALIST (REACT & NODE.JS)",
  "RESTFUL API & BACKEND ARCHITECT"
];

const HIGHLIGHTS = [
  { icon: "fa-solid fa-graduation-cap", label: "Amity '26 (7.33 CGPA)", color: "text-purple-400" },
  { icon: "fa-solid fa-floppy-disk", label: "IEEE Xplore 1st-Author", color: "text-indigo-400" },
  { icon: "fa-brands fa-aws", label: "AWS Academy Graduate", color: "text-amber-400" },
  { icon: "fa-solid fa-briefcase", label: "3+ Internships Experience", color: "text-emerald-400" }
];

function Hero() {
  const { hero } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Dynamic Intro Animation
    gsap.fromTo(
      ".hero-container",
      { opacity: 0, y: 30, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }
    );

    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);

    const highlightTimer = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    }, 2800);

    return () => {
      clearInterval(roleTimer);
      clearInterval(highlightTimer);
    };
  }, []);

  return (
    <>
      <header className="min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative z-10 pt-24 pb-12 sm:py-20 w-full max-w-[95vw] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
        {/* Transparent Fluid Hero Wrapper */}
        <div className="hero-container w-full relative px-1 sm:px-0">
          {/* 1. Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md mb-4 sm:mb-8 max-w-full">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-purple-400 animate-pulse shrink-0"></span>
            <span className="text-purple-300 text-[10px] sm:text-sm md:text-base font-semibold tracking-tight truncate">
              Open to Full-Time SDE & Engineering Roles (2026)
            </span>
          </div>

          {/* 2. Main Name Title */}
          <h1 className="text-[3.4rem] xs:text-[3.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] 2xl:text-[9.5rem] font-black uppercase tracking-tight text-white italic leading-none mb-4 sm:mb-6 inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4 w-full whitespace-nowrap">
            <span>{hero.title}</span>
            <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent not-italic uppercase">
              {hero.subtitle}
            </span>
          </h1>

          {/* 3. Role Sub-header with Fluid Gradient Lines */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-6 my-3 sm:my-6 w-full max-w-3xl mx-auto">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-purple-500/50"></span>
            <span className="text-purple-300 font-extrabold text-[9px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase shrink-0 transition-all duration-500">
              {ROLES[roleIndex]}
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-purple-500/50"></span>
          </div>

          {/* 4. Description Paragraph */}
          <p className="text-gray-300 text-[11px] sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed px-2 sm:px-0 mb-5 sm:mb-8">
            Engineering scalable full-stack web applications with{' '}
            <span className="text-purple-300 font-semibold italic">JavaScript, React.js, Node.js & Express.js</span>
            . Passionate about{' '}
            <span className="text-purple-300 font-semibold italic">RESTful APIs, Microservices</span> and{' '}
            <span className="text-purple-300 font-semibold italic">Cloud Architecture</span>.
          </p>

          {/* 5. Dynamic Cycling Glass Pill Badge */}
          <div className="flex justify-center mb-5 sm:mb-12">
            <div
              onClick={() => setHighlightIndex((prev) => (prev + 1) % HIGHLIGHTS.length)}
              className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-6 py-1.5 sm:py-3 rounded-full border border-primary/30 bg-white/[0.04] backdrop-blur-xl text-[11px] sm:text-sm md:text-base font-medium text-gray-200 hover:border-primary/60 transition-colors cursor-pointer group"
            >
              <i className={`${HIGHLIGHTS[highlightIndex].icon} ${HIGHLIGHTS[highlightIndex].color} text-xs sm:text-base shrink-0 transition-colors`}></i>
              <span className="transition-all duration-300 text-white font-semibold">
                {HIGHLIGHTS[highlightIndex].label}
              </span>
            </div>
          </div>

          {/* 6. CTA Pill Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-5 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto">
            <a
              href="#experience"
              className="btn-shimmer w-full sm:w-auto px-6 sm:px-12 py-2.5 sm:py-4.5 bg-primary hover:bg-purple-600 text-black font-black text-[11px] sm:text-sm md:text-base tracking-wide rounded-full transition-all flex items-center justify-center gap-2 sm:gap-2.5"
            >
              <i className="fa-solid fa-graduation-cap text-xs sm:text-sm"></i>
              <span>Career Roadmap</span>
              <i className="fa-solid fa-arrow-right text-[10px] sm:text-xs"></i>
            </a>

            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="w-full sm:w-auto px-6 sm:px-12 py-2.5 sm:py-4.5 bg-black/40 border border-purple-500/40 hover:border-purple-500/80 hover:bg-purple-500/10 text-white font-extrabold text-[11px] sm:text-sm md:text-base tracking-wide rounded-full transition-colors flex items-center justify-center gap-2 sm:gap-2.5"
            >
              <i className="fa-solid fa-file-lines text-xs sm:text-sm text-purple-300"></i>
              <span>View Resume</span>
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
