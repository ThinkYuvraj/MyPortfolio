import React from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function Education() {
  const { education, publications, certifications } = portfolioData;

  return (
    <section id="education" className="max-w-6xl mx-auto py-20 md:py-32 px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Education Column */}
        <div className="reveal-left flex flex-col relative z-10">
          <h2 className="text-3xl font-black text-white mb-10 uppercase italic tracking-tighter">
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Tilt key={index} tiltMaxAngleX={4} tiltMaxAngleY={4} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
                <div className="bento-card p-6 md:p-8 rounded-3xl border-l-4 border-primary w-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg md:text-xl font-bold text-white">{edu.institution}</h3>
                      <span className="text-primary text-xs font-bold bg-primary/10 px-3 py-1 rounded-full border border-primary/20 shrink-0">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium text-sm mt-1">{edu.degree}</p>
                    <p className="text-primary font-bold text-sm mt-2 italic">{edu.score}</p>
                  </div>

                  {edu.coursework && (
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">Relevant Subjects:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="text-[11px] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md text-gray-300">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* Publications & Certifications Column */}
        <div className="reveal-right flex flex-col relative z-10 space-y-12">
          {/* Publications */}
          <div>
            <h2 className="text-3xl font-black text-white mb-8 uppercase italic tracking-tighter">
              Publications
            </h2>
            <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
              <div className="bento-card p-6 md:p-8 rounded-3xl border-l-4 border-fuchsia-500 w-full">
                {publications.map((pub, index) => (
                  <div key={index} className="space-y-3">
                    <span className="text-fuchsia-400 text-[10px] font-black uppercase tracking-widest bg-fuchsia-500/10 border border-fuchsia-500/20 px-3 py-1 rounded-full inline-block">
                      IEEE Publication
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      "{pub.title}"
                    </h3>
                    <p className="text-gray-400 text-xs italic">
                      {pub.venue}
                    </p>
                    <p className="text-primary text-xs font-mono font-semibold">
                      {pub.documentId}
                    </p>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-black text-white mb-8 uppercase italic tracking-tighter">
              Certifications
            </h2>
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
              <div className="bento-card p-6 md:p-8 rounded-3xl w-full">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex justify-between items-center text-sm gap-4 border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs">
                          <i className="fa-solid fa-certificate"></i>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">{cert.name}</p>
                        </div>
                      </div>
                      <span className="text-gray-500 text-xs font-medium shrink-0 italic">{cert.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

