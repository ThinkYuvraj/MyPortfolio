import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function CareerPath({ onOpenResume }) {
  const { experience, education, publications, certifications } = portfolioData;
  const [activeMobileTab, setActiveMobileTab] = useState('experience'); // 'experience' | 'education' | 'credentials'

  return (
    <section id="career-path" aria-labelledby="career-path-heading" className="max-w-6xl mx-auto py-12 md:py-24 px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
        <div>
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block mb-2">
            Milestones & Growth
          </span>
          <h2 id="career-path-heading" className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Career <span className="text-primary">Path</span>
          </h2>
        </div>
        <button
          onClick={onOpenResume}
          className="self-start md:self-auto px-4 py-2 rounded-xl glass border border-primary/40 text-xs font-bold text-white hover:bg-primary hover:text-black transition-all flex items-center gap-2"
        >
          <i className="fa-solid fa-file-invoice text-primary"></i>
          <span>View Verified Resume</span>
        </button>
      </div>

      {/* MOBILE SEGMENTED TAB SWITCHER (Reduces mobile vertical length by 65%) */}
      <div className="flex lg:hidden p-1 bg-white/5 border border-white/10 rounded-xl mb-6">
        <button
          onClick={() => setActiveMobileTab('experience')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all text-center ${
            activeMobileTab === 'experience'
              ? 'bg-primary text-black shadow-sm'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <i className="fa-solid fa-briefcase text-[11px] mr-1"></i>
          <span>Experience ({experience.length})</span>
        </button>
        <button
          onClick={() => setActiveMobileTab('education')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all text-center ${
            activeMobileTab === 'education'
              ? 'bg-primary text-black shadow-sm'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <i className="fa-solid fa-graduation-cap text-[11px] mr-1"></i>
          <span>Education</span>
        </button>
        <button
          onClick={() => setActiveMobileTab('credentials')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all text-center ${
            activeMobileTab === 'credentials'
              ? 'bg-primary text-black shadow-sm'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <i className="fa-solid fa-award text-[11px] mr-1"></i>
          <span>Pubs & Certs</span>
        </button>
      </div>

      {/* MOBILE DISPLAY (Only shows active tab) */}
      <div className="block lg:hidden space-y-4 mb-8">
        {activeMobileTab === 'experience' && (
          <div className="space-y-3.5">
            {experience.map((exp, index) => (
              <div key={index} className="bento-card p-4 rounded-xl border-l-4 border-primary">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h4 className="text-sm font-bold text-white leading-snug">{exp.role}</h4>
                  <span className="text-primary text-[9px] font-bold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20 shrink-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-gray-300 font-medium text-xs mb-1.5">
                  {exp.companyLink ? (
                    <a href={exp.companyLink} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      {exp.company} <i className="fa-solid fa-arrow-up-right-from-square text-[8px] ml-0.5"></i>
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                {exp.tech && (
                  <p className="text-primary text-[10px] font-semibold italic mb-1.5">
                    Stack: <span className="text-gray-300 not-italic font-normal">{exp.tech}</span>
                  </p>
                )}
                <ul className="text-gray-300 text-xs space-y-1 list-disc ml-3.5 leading-relaxed">
                  {exp.points.map((point, ptIdx) => (
                    <li key={ptIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeMobileTab === 'education' && (
          <div className="space-y-3.5">
            {education.map((edu, index) => (
              <div key={index} className="bento-card p-4 rounded-xl border-l-4 border-fuchsia-500">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h4 className="text-sm font-bold text-white leading-snug">{edu.institution}</h4>
                  <span className="text-fuchsia-400 text-[9px] font-bold uppercase tracking-wider bg-fuchsia-500/10 px-2 py-0.5 rounded-full border border-fuchsia-500/20 shrink-0">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-gray-300 font-medium text-xs mb-1">{edu.degree}</p>
                <p className="text-primary font-bold text-xs italic mb-1.5">{edu.score}</p>
                {edu.coursework && (
                  <div className="flex flex-wrap gap-1">
                    {edu.coursework.map((course, cIdx) => (
                      <span key={cIdx} className="text-[9px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-gray-300">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeMobileTab === 'credentials' && (
          <div className="space-y-4">
            {/* IEEE Publication */}
            <div className="bento-card p-4 rounded-xl border-l-4 border-fuchsia-500">
              <span className="text-fuchsia-400 text-[9px] font-black uppercase tracking-widest bg-fuchsia-500/10 border border-fuchsia-500/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
                IEEE Conference Paper
              </span>
              {publications.map((pub, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-xs font-bold text-white leading-snug">"{pub.title}"</h4>
                  <p className="text-gray-400 text-[11px] italic">{pub.venue}</p>
                  <p className="text-primary text-[10px] font-mono font-semibold">{pub.documentId}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bento-card p-4 rounded-xl">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <i className="fa-solid fa-certificate text-primary text-xs"></i> Certifications
              </h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex justify-between items-center text-xs gap-2 border-b border-white/5 pb-1.5 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <i className="fa-solid fa-award text-primary text-xs shrink-0"></i>
                      <p className="text-white font-medium text-[11px] truncate">{cert.name}</p>
                    </div>
                    <span className="text-gray-400 text-[10px] shrink-0 italic">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* DESKTOP FULL 2-COLUMN SIDE-BY-SIDE GRID */}
      <div className="hidden lg:grid grid-cols-2 gap-8 items-start mb-14">
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

      {/* DESKTOP PUBLICATIONS & CERTIFICATIONS ROW */}
      <div className="hidden lg:grid grid-cols-2 gap-8 items-start pt-6 border-t border-white/10">
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
