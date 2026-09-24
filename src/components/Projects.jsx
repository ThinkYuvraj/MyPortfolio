import React, { useState, useMemo } from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [copiedLink, setCopiedLink] = useState('');
  const [showAllMobile, setShowAllMobile] = useState(false);

  const categories = ['All', 'AI & Machine Learning', 'Full-Stack & Systems', 'Real-Time & APIs'];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.subtitle && project.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.tech && project.tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.badge && project.badge.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesCategory = true;
      if (selectedCategory === 'AI & Machine Learning') {
        matchesCategory =
          project.badge?.includes('AI') ||
          project.badge?.includes('DEEP LEARNING') ||
          project.tech?.includes('FastAPI') ||
          project.tech?.includes('TensorFlow');
      } else if (selectedCategory === 'Full-Stack & Systems') {
        matchesCategory =
          project.badge?.includes('FULL-STACK') ||
          project.badge?.includes('COLLABORATION') ||
          project.badge?.includes('CREATOR') ||
          project.tech?.includes('Express');
      } else if (selectedCategory === 'Real-Time & APIs') {
        matchesCategory =
          project.badge?.includes('REAL-TIME') ||
          project.tech?.includes('Socket.io') ||
          project.tech?.includes('FastAPI') ||
          project.tech?.includes('TanStack Query');
      }

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, selectedCategory]);

  const handleCopyLink = (link, title) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(title);
    setTimeout(() => setCopiedLink(''), 2500);
  };

  return (
    <section id="projects" aria-labelledby="projects-heading" className="max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6 relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full inline-block">
              Software & AI Systems
            </span>
            <span className="text-[10px] bg-white/10 text-gray-300 border border-white/10 px-2.5 py-0.5 rounded-full font-bold">
              {projects.length} Production Builds
            </span>
          </div>
          <h2 id="projects-heading" className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl font-normal leading-relaxed">
            Real-world systems engineered with end-to-end ownership: from RAG recruiter pipelines to real-time WebSockets and inventory cron automation.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full lg:w-72 relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
          <input
            type="text"
            placeholder="Search projects by tech (e.g. FastAPI, Socket.io)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === cat
                ? 'bg-primary text-black font-black shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-primary/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 relative z-10">
        {filteredProjects.map((project, index) => {
          const isHiddenOnMobile = index >= 3 && !showAllMobile && selectedCategory === 'All' && !searchQuery;

          return (
            <div
              key={index}
              className={isHiddenOnMobile ? 'hidden md:block' : 'block'}
            >
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#a855f7"
                scale={1.01}
                transitionSpeed={2500}
                className="h-full"
              >
                <div className="bento-card group rounded-2xl md:rounded-[2.2rem] overflow-hidden h-full flex flex-col p-4 sm:p-6 md:p-8 justify-between border border-white/10 hover:border-primary/50 transition-all">
                  <div>
                    <div className="flex justify-between items-start mb-3 md:mb-4 gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                          <span className="bg-primary/10 text-primary text-[9px] md:text-[10px] font-black px-2.5 py-0.5 md:px-3 md:py-1 uppercase rounded-full border border-primary/20 inline-block">
                            {project.badge}
                          </span>
                          {project.blogLink && (
                            <span className="bg-amber-500/10 text-amber-400 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                              Article
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-2xl font-black text-white uppercase group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-xs md:text-sm font-semibold text-primary/90 mt-0.5 md:mt-1 tracking-wide">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all text-lg md:text-xl shrink-0 mt-1 shadow-inner">
                        <i className={project.icon}></i>
                      </div>
                    </div>

                    {project.tech && (
                      <div className="mb-3 md:mb-4">
                        <p className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 md:mb-1.5">
                          Tech Stack:
                        </p>
                        <div className="flex flex-wrap gap-1 md:gap-1.5">
                          {project.tech.split(',').map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] md:text-[11px] bg-white/5 border border-white/5 text-gray-200 px-2 py-0.5 md:px-2.5 rounded-md font-medium"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.points ? (
                      <ul className="text-gray-300 text-xs md:text-sm space-y-1.5 md:space-y-2 list-disc ml-3.5 md:ml-4 leading-relaxed mb-4 md:mb-6">
                        {project.points.map((pt, ptIdx) => (
                          <li key={ptIdx}>{pt}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 md:pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.tryLink && (
                        <a
                          href={project.tryLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl border border-primary/60 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-black transition-all flex items-center gap-1.5 shadow-sm"
                        >
                          <span>Live Demo</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                        </a>
                      )}
                      {project.knowMoreLink && (
                        <a
                          href={project.knowMoreLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl glass border border-white/10 px-3 py-1.5 text-xs font-bold text-gray-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-1.5"
                        >
                          <span>{project.knowMoreLink.includes('onrender.com') ? 'Backend API' : 'Code'}</span>
                          <i className={project.knowMoreLink.includes('github.com') ? 'fa-brands fa-github text-xs' : 'fa-solid fa-server text-[9px]'}></i>
                        </a>
                      )}
                      {project.blogLink && (
                        <a
                          href={project.blogLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl bg-orange-500/10 border border-orange-500/30 px-3 py-1.5 text-xs font-bold text-orange-400 hover:bg-orange-500 hover:text-black transition-all flex items-center gap-1.5"
                        >
                          <span>Case Study</span>
                          <i className="fa-brands fa-medium text-[10px]"></i>
                        </a>
                      )}
                    </div>

                    {/* Architecture details trigger */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span>Details</span>
                      <i className="fa-solid fa-circle-info text-[10px]"></i>
                    </button>
                  </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>

      {/* Mobile Expand / Collapse Toggle (Only shown when viewing all with no active query) */}
      {selectedCategory === 'All' && !searchQuery && filteredProjects.length > 3 && (
        <div className="md:hidden mt-5 text-center">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="w-full py-3 rounded-xl glass border border-primary/40 text-primary hover:bg-primary/20 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <span>
              {showAllMobile
                ? 'Collapse to Top 3 Featured'
                : `View All ${filteredProjects.length} Shipped Projects (+${filteredProjects.length - 3} more)`}
            </span>
            <i className={`fa-solid ${showAllMobile ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px]`}></i>
          </button>
        </div>
      )}

      {/* No results fallback */}
      {filteredProjects.length === 0 && (
        <div className="glass p-12 rounded-3xl border border-white/10 text-center max-w-md mx-auto my-8">
          <i className="fa-solid fa-folder-open text-3xl text-gray-500 mb-3"></i>
          <h4 className="text-white font-bold text-sm">No matching projects found</h4>
          <p className="text-xs text-gray-400 mt-1">Try a different search term or category filter.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-4 px-4 py-2 rounded-xl bg-white/10 text-xs font-bold text-white hover:bg-white/20"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="glass w-full max-w-2xl rounded-3xl border border-primary/40 p-6 md:p-8 flex flex-col overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setActiveModalProject(null)}
              aria-label="Close modal"
              className="absolute top-6 right-6 w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 uppercase rounded-full border border-primary/30">
                {activeModalProject.badge}
              </span>
              <span className="text-xs text-gray-400">Architecture & System Decisions</span>
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              {activeModalProject.title}
            </h3>
            <p className="text-sm font-semibold text-primary mt-0.5">{activeModalProject.subtitle}</p>

            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Stack Architecture:</p>
              <p className="text-xs text-white font-medium">{activeModalProject.tech}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Engineering Highlights:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300 list-disc ml-4 leading-relaxed">
                {activeModalProject.points ? (
                  activeModalProject.points.map((pt, idx) => <li key={idx}>{pt}</li>)
                ) : (
                  <li>{activeModalProject.description}</li>
                )}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {activeModalProject.tryLink && (
                  <a
                    href={activeModalProject.tryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-primary text-black font-black uppercase text-xs tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
                  >
                    <span>Launch Live Demo</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                )}
                {activeModalProject.knowMoreLink && (
                  <a
                    href={activeModalProject.knowMoreLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl glass border border-white/10 text-xs font-bold text-white hover:border-white/30 transition-all flex items-center gap-1.5"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={() =>
                  handleCopyLink(
                    activeModalProject.tryLink || activeModalProject.knowMoreLink,
                    activeModalProject.title
                  )
                }
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
              >
                <i className="fa-solid fa-link text-[10px]"></i>
                <span>{copiedLink === activeModalProject.title ? 'Link Copied! ✓' : 'Share Project'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
