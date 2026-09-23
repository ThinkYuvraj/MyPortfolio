import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

const CATEGORY_ICONS = {
  "Programming Languages": "fa-code",
  "Backend & APIs": "fa-server",
  "Databases": "fa-database",
  "Cloud & DevOps": "fa-cloud-arrow-up",
  "Frontend": "fa-laptop-code",
  "Developer Tools & Collaboration": "fa-wrench"
};

function Skills() {
  const { skills } = portfolioData;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 md:py-32 px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block mb-3">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
        </div>

        {/* Skill Search Bar */}
        <div className="relative w-full md:w-72">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
          <input
            type="text"
            placeholder="Search skills (e.g., Python, AWS, React)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {filteredSkills.map((category, index) => (
          <Tilt key={index} tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.1} glareColor="#a855f7" scale={1.02} transitionSpeed={2500}>
            <div className="bento-card p-6 md:p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs">
                    <i className={`fa-solid ${CATEGORY_ICONS[category.title] || 'fa-layer-group'}`}></i>
                  </div>
                  <h3 className="text-primary font-bold text-xs uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Skills;
