import React from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 md:py-32 px-6">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-12 md:mb-16 uppercase italic tracking-tighter">
        Industry <span className="text-primary">Experience</span>
      </h2>
      <div className="space-y-6 md:space-y-8 relative z-10">
        {experience.map((exp, index) => (
          <Tilt key={index} tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
            <div className="bento-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-primary/90 font-semibold text-sm">| {exp.company}</span>
                </div>
                {exp.tech && (
                  <p className="text-gray-400 text-xs font-semibold italic mb-4">
                    Technologies used: <span className="text-gray-200 not-italic font-normal">{exp.tech}</span>
                  </p>
                )}
                <ul className="text-gray-300 text-sm mt-3 space-y-2 list-disc ml-5 leading-relaxed">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
              <span className="text-primary text-[11px] font-bold uppercase tracking-widest shrink-0 self-start h-fit bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 inline-block mt-1">
                {exp.date}
              </span>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Experience;


