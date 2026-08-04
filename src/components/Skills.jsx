import React, { useEffect } from 'react';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function Skills() {
  const { skills } = portfolioData;

  useEffect(() => {
    gsap.from(".bento-card", { 
      scrollTrigger: { trigger: "#skills", start: "top 80%" }, 
      y: 30, 
      stagger: 0.1, 
      duration: 0.8 
    });
  }, []);

  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 md:py-32 px-6">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-12 md:mb-16 uppercase italic tracking-tighter">
        Technical <span className="text-primary">Arsenal</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {skills.map((category, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.02} transitionSpeed={2500}>
            <div className="bento-card p-6 md:p-8 rounded-3xl h-full">
              <h3 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Skills;
