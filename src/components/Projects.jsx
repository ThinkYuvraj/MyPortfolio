import React from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 md:py-32 px-6">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-12 md:mb-16 uppercase italic tracking-tighter">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.15} glareColor="#a855f7" scale={1.03} transitionSpeed={2500}>
            <div className="bento-card group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-full flex flex-col">
              <div className="h-48 md:h-64 bg-neutral-950 flex items-center justify-center relative">
                <i className={`${project.icon} text-primary/20 text-7xl md:text-8xl`}></i>
                <div className="absolute top-4 right-4 bg-primary text-black text-[9px] font-black px-3 py-1 uppercase rounded-full">
                  {project.badge}
                </div>
              </div>
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black text-white uppercase group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a href={project.tryLink} target="_blank" rel="noreferrer" className="rounded-lg border border-primary/50 px-3 py-1 text-xs hover:bg-primary hover:text-black transition-all">Try it</a>
                  </div>
                  <p className="text-gray-500 text-sm mt-4">{project.description}</p>
                </div>
                <a href={project.knowMoreLink} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest font-bold hover:text-primary mt-6 inline-block">Know More</a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Projects;
