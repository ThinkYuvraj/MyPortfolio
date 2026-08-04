import React from 'react';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function Education() {
  const { education, achievements } = portfolioData;

  return (
    <section className="max-w-6xl mx-auto py-20 md:py-32 px-6 grid lg:grid-cols-2 gap-12 items-stretch">
      {/* Education Column */}
      <div className="reveal-left flex flex-col relative z-10">
        <h2 className="text-3xl font-black text-white mb-10 uppercase italic tracking-tighter">Education</h2>
        
        {education.map((edu, index) => (
          <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.02} transitionSpeed={2500} className="mb-4 flex-grow flex">
            <div className="bento-card p-6 md:p-8 rounded-3xl border-l-4 border-primary w-full flex flex-col">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-primary font-bold">{edu.institution}<br /> <span className="text-xs">{edu.location}</span></p>
              <p className="text-gray-500 text-sm mt-2 italic">{edu.score}</p>
              <div className="mt-8 mt-auto">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span key={courseIndex} className="skill-badge">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Achievements Column */}
      <div className="reveal-right flex flex-col relative z-10">
        <h2 className="text-3xl font-black text-white mb-10 uppercase italic tracking-tighter">
          Achievements
        </h2>
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.01} transitionSpeed={2500} className="flex-grow flex">
          <div className="bento-card p-6 md:p-8 rounded-3xl w-full">
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center gap-4 text-sm text-gray-400 group">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                    <i className={achievement.icon}></i>
                  </div>
                  <span className="group-hover:text-white transition-colors">
                    {achievement.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Tilt>
      </div>
    </section>
  );
}

export default Education;
