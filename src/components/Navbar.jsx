import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const { socials } = portfolioData;

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  return (
    <>
      <nav className="fixed w-full z-50 top-0 px-3 sm:px-6 md:px-8 py-3 sm:py-5 pointer-events-none">
        <div className="w-full max-w-full sm:max-w-[95vw] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto flex justify-between items-center glass rounded-2xl md:rounded-3xl px-4 sm:px-9 py-3 sm:py-4.5 pointer-events-auto shadow-2xl border border-primary/25 backdrop-blur-2xl">
          <div className="flex items-center">
            <a href="#" className="text-xl sm:text-2xl md:text-2xl font-black tracking-tight uppercase italic shrink-0">
              <span className="text-primary">YUVRAJ SINGH</span>
            </a>
            <span className="hidden xl:inline-block text-xs font-semibold text-gray-300 italic border-l border-white/15 pl-4 ml-4">
              Debugging my life and code
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
            <a href="#" className="text-gray-200 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-gray-200 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-gray-200 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-gray-200 hover:text-primary transition-colors">Projects</a>
            <a href="#future-path" className="text-gray-200 hover:text-primary transition-colors">Next Milestone</a>
            <a href="#career-path" className="text-gray-200 hover:text-primary transition-colors">Career Path</a>
            <a href="#contact" className="text-gray-200 hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={socials.find(s => s.text === 'GitHub')?.link}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-gray-200 hover:text-primary hover:border-primary/50 transition-all text-sm sm:text-base"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={socials.find(s => s.text === 'LinkedIn')?.link}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-gray-200 hover:text-primary hover:border-primary/50 transition-all text-sm sm:text-base"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden text-primary text-2xl p-1">
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center text-center p-8 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuActive ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none invisible'}`}>
        <button onClick={closeMenu} className="absolute top-8 right-8 text-primary text-3xl">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="flex flex-col space-y-6 text-2xl font-black uppercase italic tracking-widest">
          <a href="#" onClick={closeMenu} className="hover:text-primary">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-primary">About</a>
          <a href="#skills" onClick={closeMenu} className="hover:text-primary">Skills</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-primary">Projects</a>
          <a href="#future-path" onClick={closeMenu} className="hover:text-primary">Next Milestone</a>
          <a href="#career-path" onClick={closeMenu} className="hover:text-primary">Career Path</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-primary">Contact</a>
        </div>
        <div className="mt-12 flex space-x-8 text-2xl">
          <a href={socials.find(s => s.text === 'GitHub')?.link} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href={socials.find(s => s.text === 'LinkedIn')?.link} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
