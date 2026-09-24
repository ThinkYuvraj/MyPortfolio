import React from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function About({ onOpenResume }) {
  const { about } = portfolioData;

  const pillars = [
    { icon: "fa-solid fa-layer-group", title: "Frontend Engineering", desc: "JavaScript (ES6+), React.js & Next.js" },
    { icon: "fa-solid fa-server", title: "Backend Systems", desc: "FastAPI, Node.js, Express.js & RESTful APIs" },
    { icon: "fa-solid fa-database", title: "Database & Cloud", desc: "PostgreSQL, MongoDB, SQL & AWS Cloud" }
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="max-w-6xl mx-auto py-12 md:py-24 px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
        {/* Photo & Glass Card Column */}
        <div>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.12} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
            <div className="relative max-w-[280px] sm:max-w-xs md:max-w-md mx-auto lg:mx-0">
              <div className="w-full aspect-square bg-card rounded-3xl md:rounded-[3rem] border-2 border-primary/30 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
                <img 
                  src={about.photo} 
                  alt="Yuvraj Singh"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge Overlay */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 md:-bottom-6 md:-right-6 glass p-3.5 sm:p-5 md:p-6 rounded-2xl md:rounded-[1.8rem] border border-primary/40 shadow-2xl backdrop-blur-xl">
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-white italic tracking-tighter">Full-Stack <span className="text-primary font-normal">Web</span></p>
                <p className="text-[11px] sm:text-xs text-gray-300 font-semibold mt-0.5">Software Developer</p>
                <div className="mt-1.5 sm:mt-2 flex gap-1 sm:gap-1.5 flex-wrap">
                  <span className="text-[8px] sm:text-[9px] bg-primary/20 text-primary font-bold px-1.5 sm:px-2 py-0.5 rounded-md border border-primary/30">JS/TS</span>
                  <span className="text-[8px] sm:text-[9px] bg-primary/20 text-primary font-bold px-1.5 sm:px-2 py-0.5 rounded-md border border-primary/30">React</span>
                  <span className="text-[8px] sm:text-[9px] bg-primary/20 text-primary font-bold px-1.5 sm:px-2 py-0.5 rounded-md border border-primary/30">Node.js</span>
                  <span className="text-[8px] sm:text-[9px] bg-primary/20 text-primary font-bold px-1.5 sm:px-2 py-0.5 rounded-md border border-primary/30">FastAPI</span>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Text Details Column */}
        <div className="space-y-4 md:space-y-6 text-center lg:text-left mt-6 lg:mt-0">
          <div>
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block mb-2">
              Background & Focus
            </span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic leading-tight">
              About <span className="text-primary">Me.</span>
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
            {about.bio}
          </p>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-3 gap-2.5 md:gap-3 text-left pt-1">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all">
                <i className={`${pillar.icon} text-primary text-base md:text-lg mb-1.5 block`}></i>
                <p className="text-xs font-bold text-white uppercase tracking-wider">{pillar.title}</p>
                <p className="text-[10px] text-gray-400 mt-1 leading-snug">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2.5 text-left pt-1">
            <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0 shadow-[0_0_10px_#a855f7]"></div>
              <p className="text-xs md:text-sm text-gray-300">
                <span className="text-white font-bold">Interests: </span>{about.interests}
              </p>
            </div>
            <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0 shadow-[0_0_10px_#a855f7]"></div>
              <p className="text-xs md:text-sm text-gray-300">
                <span className="text-white font-bold">Career Goals: </span>{about.careerGoals}
              </p>
            </div>
          </div>

          {/* Resume Action */}
          <div className="pt-2 flex justify-center lg:justify-start">
            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 rounded-xl glass border border-primary/40 text-xs font-bold text-white hover:bg-primary hover:text-black transition-all flex items-center gap-2"
            >
              <i className="fa-solid fa-file-invoice text-primary"></i>
              <span>View Verified Resume & Background</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
