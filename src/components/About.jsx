import React, { useEffect } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/portfolio';

function About() {
  const { about } = portfolioData;

  useEffect(() => {
    gsap.from(".reveal-left", { scrollTrigger: "#about", x: -50, duration: 1.2 });
    gsap.from(".reveal-right", { scrollTrigger: "#about", x: 50, duration: 1.2 });
  }, []);

  return (
    <section id="about" className="max-w-6xl mx-auto py-20 md:py-32 px-6">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="reveal-left order-2 lg:order-1">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div
              className="w-full aspect-square bg-card rounded-[2.5rem] md:rounded-[3rem] border-2 border-primary/20 overflow-hidden group shadow-2xl">
              <img src={about.photo} alt="Yuvraj Singh"
                className="w-full h-full object-cover transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-primary/30">
              <p className="text-2xl md:text-4xl font-black text-primary tracking-tighter italic">Full</p>
              <p className="text-sm md:text-base"> Stack Developer </p>
              <p className="text-[8px] md:text-[9px] text-gray-500 uppercase font-black tracking-widest mt-1">Specialization</p>
            </div>
          </div>
        </div>

        <div className="reveal-right space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase italic">
            About<span className="text-primary">ME.</span>
          </h2>
          <p className="text-gray-400 leading-loose text-base md:text-lg">
            {about.bio}
          </p>
          <div className="space-y-4 text-left max-w-lg mx-auto lg:mx-0">
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0 shadow-[0_0_10px_#a855f7]"></div>
              <p className="text-sm text-gray-300">
                <span className="text-white font-bold">Interests: </span>{about.interests}
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0 shadow-[0_0_10px_#a855f7]"></div>
              <p className="text-sm text-gray-300">
                <span className="text-white font-bold">Career Goals: </span>{about.careerGoals}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
