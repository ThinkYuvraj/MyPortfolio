import React from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 md:py-24 px-6">
      <div className="mb-10 md:mb-14">
        <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block mb-3">
          Software & AI Innovations
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
          Featured <span className="text-primary">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.12} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
            <div className="bento-card group rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden h-full flex flex-col p-5 md:p-8 justify-between">
              <div>
                <div className="flex justify-between items-start mb-4 gap-3">
                  <div>
                    <div className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 uppercase rounded-full border border-primary/20 inline-block mb-2">
                      {project.badge}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs md:text-sm font-semibold text-primary/90 mt-1 tracking-wide">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  <i className={`${project.icon} text-primary/30 text-3xl md:text-4xl group-hover:text-primary transition-colors shrink-0 mt-1`}></i>
                </div>

                {project.tech && (
                  <p className="text-primary text-xs font-semibold italic mb-3">
                    Technologies: <span className="text-gray-300 not-italic font-normal">{project.tech}</span>
                  </p>
                )}

                {project.points ? (
                  <ul className="text-gray-300 text-xs md:text-sm space-y-2 list-disc ml-4 leading-relaxed mb-6">
                    {project.points.map((pt, ptIdx) => (
                      <li key={ptIdx}>{pt}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 text-xs md:text-sm mb-6 leading-relaxed">{project.description}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                {project.tryLink && (
                  <a href={project.tryLink} target="_blank" rel="noreferrer" className="rounded-xl border border-primary/50 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-primary hover:text-black transition-all flex items-center gap-1.5">
                    Live Demo <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                )}
                {project.knowMoreLink && (
                  <a href={project.knowMoreLink} target="_blank" rel="noreferrer" className="rounded-xl glass border border-white/10 px-3.5 py-1.5 text-xs font-bold text-gray-300 hover:text-white transition-all flex items-center gap-1.5">
                    {project.knowMoreLink.includes('onrender.com') ? 'Backend API' : 'Source Code'}{' '}
                    <i className={project.knowMoreLink.includes('github.com') ? 'fa-brands fa-github' : 'fa-solid fa-server text-[10px]'}></i>
                  </a>
                )}
                {project.blogLink && (
                  <a href={project.blogLink} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 text-xs font-bold text-orange-400 hover:bg-orange-500 hover:text-black transition-all flex items-center gap-1.5">
                    Read Article <i className="fa-brands fa-medium text-[10px]"></i>
                  </a>
                )}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Projects;
