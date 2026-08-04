import React from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 md:py-32 px-6">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-12 md:mb-16 uppercase italic tracking-tighter">
        Professional <span className="text-primary">Journey</span>
      </h2>
      <div className="space-y-6 md:space-y-8 relative z-10">
        {experience.map((exp, index) => (
          <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
            <div className="bento-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                  {exp.role}
                </p>
                <ul className="text-gray-400 text-sm mt-3 space-y-2 list-disc ml-5">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest shrink-0">
                {exp.date}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Experience;
