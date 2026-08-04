import React, { useEffect } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/portfolio';

function Hero() {
  const { hero } = portfolioData;

  useEffect(() => {
    // Dynamic Intro Animation
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "expo.out" }
    );
  }, []);

  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase leading-none tracking-tighter text-white italic">
        {hero.title}
        <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent not-italic uppercase block sm:inline ml-2">
          {hero.subtitle}
        </span>
      </h1>
      <div className="hero-content">
        <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] my-6 md:my-7 bg-primary/10 inline-block text-glow">
          {hero.role}
        </span>
        <p className="mt-4 md:mt-7 text-gray-300 text-base md:text-xl max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
          {hero.description}
        </p>
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto">
          <a href="#contact"
            className="px-10 py-4 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_10px_40px_rgba(168,85,247,0.4)]">
            Contact Me
          </a>
          <a href={hero.resumeLink}
            target="_blank" rel="noreferrer" download
            className="px-10 py-4 glass border border-primary/50 text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-primary hover:text-black transition-all">
            Download Resume <i className="fa-solid fa-download ml-2"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
