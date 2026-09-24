import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

function Navbar({ onOpenResume }) {
  const [menuActive, setMenuActive] = useState(false);
  const { socials } = portfolioData;

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  return (
    <>
      <nav aria-label="Main Navigation" className="fixed w-full z-50 top-0 px-4 md:px-6 py-4 md:py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center glass rounded-2xl px-6 md:px-8 py-4">
          <a href="#" className="text-lg md:text-xl font-black tracking-tighter uppercase italic">
            <span className="text-primary">YUVRAJ SINGH</span>
          </a>
          <p className="hidden lg:block text-xs italic text-gray-400">Full-Stack Web Developer</p>
          <div className="hidden lg:flex space-x-6 text-[9px] font-bold uppercase tracking-[0.3em]">
            <a href="#about" className="hover:text-primary transition-all">About</a>
            <a href="#skills" className="hover:text-primary transition-all">Skills</a>
            <a href="#projects" className="hover:text-primary transition-all">Projects</a>
            <a href="#roadmap" className="hover:text-primary transition-all text-primary/90 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Future Path
            </a>
            <a href="#career-path" className="hover:text-primary transition-all">Career Path</a>
            <a href="#contact" className="hover:text-primary transition-all">Contact</a>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-xl bg-primary/10 border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <i className="fa-solid fa-file-invoice text-xs"></i>
              <span className="hidden sm:inline">Resume</span>
            </button>

            <a href={socials.find(s => s.text === 'GitHub')?.link} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="hidden sm:block hover:text-primary transition-all text-sm">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={socials.find(s => s.text === 'LinkedIn')?.link} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="hidden sm:block hover:text-primary transition-all text-sm">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} aria-label="Toggle navigation menu" className="lg:hidden text-primary text-xl">
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center text-center p-8 transition-transform duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuActive ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={closeMenu} aria-label="Close menu" className="absolute top-8 right-8 text-primary text-3xl">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="flex flex-col space-y-6 text-2xl font-black uppercase italic tracking-widest">
          <a href="#about" onClick={closeMenu} className="hover:text-primary">About</a>
          <a href="#skills" onClick={closeMenu} className="hover:text-primary">Skills</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-primary">Projects</a>
          <a href="#roadmap" onClick={closeMenu} className="hover:text-primary text-primary flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Roadmap
          </a>
          <a href="#career-path" onClick={closeMenu} className="hover:text-primary">Career Path</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-primary">Contact</a>
        </div>
        <div className="mt-8">
          <button
            onClick={() => { closeMenu(); onOpenResume(); }}
            className="px-6 py-3 rounded-xl bg-primary text-black font-black uppercase text-xs tracking-widest shadow-lg flex items-center gap-2"
          >
            <i className="fa-solid fa-file-invoice"></i> View Verified Resume
          </button>
        </div>
        <div className="mt-8 flex space-x-8 text-2xl">
          <a href={socials.find(s => s.text === 'GitHub')?.link} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href={socials.find(s => s.text === 'LinkedIn')?.link} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
