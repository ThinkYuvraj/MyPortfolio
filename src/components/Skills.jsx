import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

const CATEGORY_ICONS = {
  "Core Technologies": "fa-microchip",
  "Programming Languages": "fa-code",
  "Backend & APIs": "fa-server",
  "Databases": "fa-database",
  "Cloud & DevOps": "fa-cloud-arrow-up",
  "Frontend": "fa-laptop-code",
  "Developer Tools & Collaboration": "fa-wrench"
};

function Skills({ onOpenResume }) {
  const { skills } = portfolioData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedNotification, setCopiedNotification] = useState('');

  const categories = ['All', ...skills.map(s => s.title)];

  const filteredSkills = skills
    .filter(category => selectedCategory === 'All' || category.title === selectedCategory)
    .map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(category => category.items.length > 0);

  const handleCopyCategorySkills = (categoryTitle, items) => {
    navigator.clipboard.writeText(`${categoryTitle}: ${items.join(', ')}`);
    setCopiedNotification(categoryTitle);
    setTimeout(() => setCopiedNotification(''), 2000);
  };

  return (
    <section id="skills" aria-labelledby="skills-heading" className="max-w-6xl mx-auto py-12 md:py-24 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 gap-4">
        <div>
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block mb-2">
            Core Competencies & Stack
          </span>
          <h2 id="skills-heading" className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
        </div>

        {/* Skill Search Bar */}
        <div className="relative w-full md:w-72">
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
          <input
            type="text"
            placeholder="Filter skills (e.g., Python, AWS, React)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-xs"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills (Scrollable on mobile) */}
      <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-8 custom-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide shrink-0 transition-all ${
              selectedCategory === cat
                ? 'bg-primary text-black shadow-[0_0_15px_rgba(168,85,247,0.4)] font-bold'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-primary/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-6 relative z-10">
        {filteredSkills.map((category, index) => (
          <Tilt key={index} tiltMaxAngleX={4} tiltMaxAngleY={4} glareEnable={true} glareMaxOpacity={0.08} glareColor="#a855f7" scale={1.01} transitionSpeed={2500}>
            <div className="bento-card p-4 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs">
                      <i className={`fa-solid ${CATEGORY_ICONS[category.title] || 'fa-layer-group'}`}></i>
                    </div>
                    <h3 className="text-primary font-bold text-xs uppercase tracking-wider">
                      {category.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopyCategorySkills(category.title, category.items)}
                    title="Copy skills in this category"
                    className="text-[10px] text-gray-500 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {copiedNotification === category.title ? (
                      <span className="text-emerald-400 font-bold">Copied ✓</span>
                    ) : (
                      <i className="fa-solid fa-copy"></i>
                    )}
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge !text-[11px] !px-2.5 !py-1">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Resume Callout Banner */}
      <div className="mt-8 md:mt-10 p-4 md:p-6 rounded-2xl glass border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/20 border border-primary/40 text-primary flex items-center justify-center text-lg md:text-xl shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <i className="fa-solid fa-file-lines"></i>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">Recruiter or Engineering Lead?</h4>
            <p className="text-[11px] md:text-xs text-gray-400 mt-0.5">Access Yuvraj's ATS-formatted resume with verified academic degrees, IEEE research, and industry internships.</p>
          </div>
        </div>
        <button
          onClick={onOpenResume}
          className="btn-shimmer w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-black font-black uppercase text-xs tracking-wider shrink-0 hover:scale-105 transition-all shadow-[0_10px_25px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2"
        >
          <span>Open Full Resume</span>
          <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    </section>
  );
}

export default Skills;
