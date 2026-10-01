import React from 'react';
import { portfolioData } from '../data/portfolio';

function Education() {
  const { education, publications, certifications } = portfolioData;

  return (
    <section id="education" className="max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* Education Column */}
        <div className="flex flex-col relative z-10">
          {/* Header Row with 3 Degrees Pill */}
          <div className="mb-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-graduation-cap text-purple-400 text-2xl sm:text-3xl"></i>
                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider">
                  EDUCATION
                </h2>
              </div>
              <span className="text-purple-300 text-xs sm:text-sm font-semibold bg-purple-950/60 border border-purple-500/40 px-3.5 py-1.5 rounded-full shadow-sm">
                3 Degrees
              </span>
            </div>
            
            <span className="text-purple-300 text-[10px] font-bold uppercase tracking-[0.25em] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full inline-block">
              ACADEMIC BACKGROUND
            </span>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass p-6 md:p-8 rounded-3xl border border-purple-500/60 relative overflow-hidden backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:border-purple-400 transition-all space-y-3"
              >
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{edu.institution}</h3>
                    <span className="text-purple-300 text-xs font-semibold bg-purple-950/70 px-3.5 py-1 rounded-full border border-purple-500/40 shrink-0">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 font-normal text-sm sm:text-base mt-1.5">{edu.degree}</p>
                  <p className="text-fuchsia-400 font-extrabold text-sm sm:text-base mt-2 italic">{edu.score}</p>
                </div>

                {edu.coursework && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2.5">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="text-xs font-medium bg-[#141419] border border-gray-700/60 text-gray-300 px-3.5 py-1.5 rounded-xl hover:border-purple-500/50 hover:text-purple-200 transition-all shadow-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Publications & Certifications Column */}
        <div className="flex flex-col relative z-10 space-y-10">
          {/* Publications */}
          <div>
            <div className="mb-6">
              <span className="text-purple-300 text-[10px] font-bold uppercase tracking-[0.25em] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full inline-block mb-3">
                RESEARCH & WRITING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tighter leading-none flex items-center gap-3">
                <i className="fa-solid fa-book-bookmark text-purple-400 text-xl sm:text-2xl"></i>
                IEEE <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent not-italic">PUBLICATIONS</span>
              </h2>
            </div>
            
            <div className="glass p-6 md:p-8 rounded-3xl border border-purple-500/60 relative overflow-hidden backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:border-purple-400 transition-all">
              {publications.map((pub, index) => (
                <div key={index} className="space-y-3 text-left">
                  <span className="text-purple-300 text-[10px] font-bold uppercase tracking-widest bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full inline-block">
                    IEEE 1st-Author Publication
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    "{pub.title}"
                  </h3>
                  <p className="text-gray-300 text-xs italic">
                    {pub.venue}
                  </p>
                  <p className="text-purple-400 text-xs font-mono font-semibold">
                    Document ID: {pub.documentId}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-6">
              <span className="text-purple-300 text-[10px] font-bold uppercase tracking-[0.25em] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full inline-block mb-3">
                VERIFIED SKILLS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tighter leading-none flex items-center gap-3">
                <i className="fa-solid fa-certificate text-purple-400 text-xl sm:text-2xl"></i>
                INDUSTRY <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent not-italic">CERTIFICATIONS</span>
              </h2>
            </div>

            <div className="glass p-6 md:p-8 rounded-3xl border border-purple-500/60 relative overflow-hidden backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:border-purple-400 transition-all">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex justify-between items-center text-sm gap-4 border-b border-white/10 pb-3.5 last:border-b-0 last:pb-0 text-left">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center text-xs shrink-0">
                        <i className="fa-solid fa-certificate"></i>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-sm truncate">{cert.name}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs font-medium shrink-0 italic">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;


