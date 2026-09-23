import React from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function CareerPath() {
  const { experience, education, publications, certifications } = portfolioData;

  return (
    <section id="career-path" className="max-w-6xl mx-auto py-16 md:py-24 px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block mb-2">
            Milestones & Growth
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Career <span className="text-primary">Path</span>
          </h2>
        </div>
      </div>

      {/* 2-Column Side-by-Side Grid for Experience & Education */}
      <div className="grid lg:grid-cols-2 gap-8 items-start mb-14">
        {/* Left Column: Work Experience */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <i className="fa-solid fa-briefcase text-primary text-sm"></i> Industry Experience
            </h3>
            <span className="text-[10px] text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
              {experience.length} Roles
            </span>
          </div>

          {experience.map((exp, index) => (
            <Tilt key={index} tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.08} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
              <div className="bento-card p-5 rounded-2xl border-l-4 border-primary">
                <div className="flex justify-between items-start gap-2 mb-1.5">
                  <h4 className="text-base font-bold text-white leading-snug">{exp.role}</h4>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 shrink-0">
                    {exp.date}
                  </span>
                </div>

                <p className="text-gray-300 font-medium text-xs mb-2">
                  {exp.companyLink ? (
                    <a href={exp.companyLink} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      {exp.company} <i className="fa-solid fa-arrow-up-right-from-square text-[9px] ml-0.5"></i>
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>

                {exp.tech && (
                  <p className="text-primary text-[11px] font-semibold italic mb-2">
                    Stack: <span className="text-gray-300 not-italic font-normal">{exp.tech}</span>
                  </p>
                )}

                <ul className="text-gray-300 text-xs space-y-1.5 list-disc ml-4 leading-relaxed">
                  {exp.points.map((point, ptIdx) => (
                    <li key={ptIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Right Column: Education */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-fuchsia-400 text-sm"></i> Education
            </h3>
            <span className="text-[10px] text-fuchsia-400 font-bold bg-fuchsia-500/10 px-2.5 py-0.5 rounded-full border border-fuchsia-500/20">
              {education.length} Degrees
            </span>
          </div>

          {education.map((edu, index) => (
            <Tilt key={index} tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.08} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
              <div className="bento-card p-5 rounded-2xl border-l-4 border-fuchsia-500">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h4 className="text-base font-bold text-white leading-snug">{edu.institution}</h4>
                  <span className="text-fuchsia-400 text-[10px] font-bold uppercase tracking-wider bg-fuchsia-500/10 px-2.5 py-0.5 rounded-full border border-fuchsia-500/20 shrink-0">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-gray-300 font-medium text-xs mb-1.5">{edu.degree}</p>
                <p className="text-primary font-bold text-xs italic mb-2">{edu.score}</p>

                {edu.coursework && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span key={cIdx} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-gray-300">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Publications & Certifications Side-by-Side Row */}
      <div className="grid lg:grid-cols-2 gap-8 items-start pt-6 border-t border-white/10">
        {/* IEEE Publications */}
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <i className="fa-solid fa-book-bookmark text-fuchsia-400 text-sm"></i> Publications
          </h3>
          <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.08} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
            <div className="bento-card p-5 rounded-2xl border-l-4 border-fuchsia-500">
              {publications.map((pub, index) => (
                <div key={index} className="space-y-2">
                  <span className="text-fuchsia-400 text-[9px] font-black uppercase tracking-widest bg-fuchsia-500/10 border border-fuchsia-500/20 px-2.5 py-0.5 rounded-full inline-block">
                    IEEE Conference Paper
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    "{pub.title}"
                  </h4>
                  <p className="text-gray-400 text-xs italic">{pub.venue}</p>
                  <p className="text-primary text-xs font-mono font-semibold">{pub.documentId}</p>
                </div>
              ))}
            </div>
          </Tilt>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <i className="fa-solid fa-certificate text-primary text-sm"></i> Certifications
          </h3>
          <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.08} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
            <div className="bento-card p-5 rounded-2xl">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex justify-between items-center text-xs gap-3 border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <i className="fa-solid fa-award text-primary text-xs shrink-0"></i>
                      <p className="text-white font-medium truncate">{cert.name}</p>
                    </div>
                    <span className="text-gray-400 text-[11px] shrink-0 italic">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default CareerPath;
