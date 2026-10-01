import React, { useState } from 'react';
import ResumeModal from './ResumeModal';
import { portfolioData } from '../data/portfolio';

const TRACKS = [
  {
    id: 0,
    badge: "MERN & NEXT.JS STACK",
    badgeIcon: "fa-layer-group",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    title: "Full-Stack Software Engineer",
    subTitle: "Building End-to-End Responsive Web Apps & Scalable APIs",
    tagline: "Ready to drive end-to-end feature ownership from pixel-perfect React/Next.js client interfaces to robust Node.js/Express backend services and relational/NoSQL databases.",
    contributions: [
      "Architecting responsive, accessible UI components with React.js, Tailwind CSS, and TypeScript",
      "Implementing secure RESTful API endpoints with JWT authentication and RBAC",
      "Integrating third-party APIs, payment webhooks, and database query optimizations"
    ],
    experience: [
      { role: "MarketinGlu Intern:", desc: "Shipping live client web components and REST APIs" },
      { role: "SmartBridge MERN Intern:", desc: "Engineered real-time chat with Socket.io & JWT" },
      { role: "HireIn Platform:", desc: "Full-stack AI recruitment platform with FastAPI & React" }
    ],
    stack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "REST APIs"]
  },
  {
    id: 1,
    badge: "FASTAPI, NODE.JS & DATABASES",
    badgeIcon: "fa-database",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    title: "Backend & Systems Engineer",
    subTitle: "Designing High-Throughput REST APIs, Microservices & Data Storage",
    tagline: "Specializing in backend service architecture, schema design, authentication security, and high-performance API endpoints for data-intensive web applications.",
    contributions: [
      "Designing schema models and database migrations in PostgreSQL & MongoDB",
      "Authoring asynchronous microservices and AI endpoints with FastAPI & Express.js",
      "Configuring rate limiting, caching layers, and JWT security middleware"
    ],
    experience: [
      { role: "HireIn AI Backend:", desc: "RAG candidate screening with Python FastAPI & Sentence Transformers" },
      { role: "Slice & Fire Kitchen Engine:", desc: "Automated BOM inventory deduction & scheduled Node-Cron jobs" },
      { role: "SocialeX Engine:", desc: "Sub-100ms real-time messaging pipeline with Socket.io" }
    ],
    stack: ["Node.js", "Express.js", "FastAPI", "Python", "PostgreSQL", "MongoDB", "REST APIs", "JWT Auth"]
  },
  {
    id: 2,
    badge: "AWS FOUNDATIONS & MICROSERVICES",
    badgeIcon: "fa-cloud",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    title: "Cloud & Scalability Engineer",
    subTitle: "Deploying Containerized Services & Resilient Cloud Infrastructure",
    tagline: "Applying AWS Cloud Foundations and containerization best practices to build automated CI/CD deployment workflows and cloud-native web services.",
    contributions: [
      "Deploying Docker containers and managing environment variables safely",
      "Provisioning AWS cloud instances (EC2, S3, RDS, IAM) with security access controls",
      "Setting up GitHub Actions CI/CD pipelines for automated testing & production builds"
    ],
    experience: [
      { role: "AWS Academy Graduate:", desc: "Certified Cloud Foundations & cloud architecture training" },
      { role: "Full-Stack Deploys:", desc: "Live production deployments on Vercel, Render, and AWS EC2" },
      { role: "Dockerized Workloads:", desc: "Containerized multi-service backend applications" }
    ],
    stack: ["AWS (EC2, S3, RDS)", "Docker", "GitHub Actions", "Linux", "Vercel", "Render", "Nginx", "Cloud Security"]
  }
];

function FuturePath() {
  const { hero } = portfolioData;
  const [activeTrack, setActiveTrack] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const currentTrack = TRACKS[activeTrack];
  const blurbText = `Yuvraj Singh is a 2026 B.Tech CSE graduate (Amity, 7.33 CGPA) with verified production internship experience at MarketinGlu and SmartBridge. Full-stack proficiency across React, Node.js, and cloud deployments.`;

  return (
    <section id="future-path" className="max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6">
      {/* 1. Header Area */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-purple-300 text-[10px] font-bold uppercase tracking-[0.25em] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
              CAREER TRAJECTORY & 2026 FOCUS
            </span>
            <span className="text-purple-300 text-[10px] font-bold bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              Open for 2026 SDE Roles
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-3">
            FUTURE <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent not-italic">PATH & HORIZON</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl font-light leading-relaxed">
            An interactive roadmap of target engineering roles, immediate day-one impact for engineering teams, and upcoming technical capabilities for 2026.
          </p>
        </div>

        {/* Top Right Quick Navigation Pills */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shrink-0 self-start lg:self-auto">
          <a href="#future-path" className="px-3.5 py-1.5 rounded-xl bg-primary text-black font-extrabold text-xs flex items-center gap-1.5 shadow-sm">
            <i className="fa-solid fa-crosshairs text-[11px]"></i>
            <span>Role Matcher</span>
          </a>
          <a href="#skills" className="px-3.5 py-1.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white font-semibold text-xs transition-colors flex items-center gap-1.5">
            <i className="fa-solid fa-satellite-dish text-[11px] text-purple-400"></i>
            <span>Tech Radar</span>
          </a>
          <a href="#career-path" className="px-3.5 py-1.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white font-semibold text-xs transition-colors flex items-center gap-1.5">
            <i className="fa-solid fa-route text-[11px] text-purple-400"></i>
            <span>Milestones</span>
          </a>
        </div>
      </div>

      {/* 2. 3 Role Track Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {TRACKS.map((track) => {
          const isActive = track.id === activeTrack;
          return (
            <div
              key={track.id}
              onClick={() => setActiveTrack(track.id)}
              className={`p-5 rounded-2xl cursor-pointer transition-all ${
                isActive
                  ? 'bg-purple-950/30 border-2 border-primary shadow-[0_0_30px_rgba(168,85,247,0.25)] backdrop-blur-xl'
                  : 'bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/40'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${track.badgeColor}`}>
                  {track.badge}
                </span>
                <i className={`fa-solid ${track.badgeIcon} text-xs text-purple-400`}></i>
              </div>

              <h3 className="text-base font-bold text-white mb-4 leading-snug">{track.title}</h3>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px]">
                <span className="text-gray-400 font-medium">Target: 2026 Batch</span>
                <span className={`font-bold flex items-center gap-1 ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                  {isActive ? 'Viewing Track ✓' : 'Click to Inspect →'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Transparent Glass Active Details Panel */}
      <div className="glass p-5 sm:p-7 md:p-8 rounded-[2rem] border border-primary/30 relative overflow-hidden shadow-2xl backdrop-blur-2xl">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
          {/* Left Column: Role Breakdown */}
          <div className="flex-1 space-y-5 text-left">
            {/* Track Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-0.5 rounded-full">
                  {currentTrack.badge}
                </span>
                <span className="text-gray-400 text-xs font-semibold">• Target Full-Time Track</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-1">
                {currentTrack.title}
              </h3>
              <p className="text-primary text-xs sm:text-sm font-semibold italic mb-2">
                {currentTrack.subTitle}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                {currentTrack.tagline}
              </p>
            </div>

            {/* Immediate Day-One Engineering Contributions */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-white flex items-center gap-2 mb-2.5">
                <i className="fa-solid fa-bolt text-purple-400 text-xs"></i>
                IMMEDIATE DAY-ONE ENGINEERING CONTRIBUTIONS
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {currentTrack.contributions.map((item, index) => (
                  <div key={index} className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all text-xs text-gray-300 font-light leading-snug flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grounded in Shipped Production Experience */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-white flex items-center gap-2 mb-2.5">
                <i className="fa-solid fa-shield-halved text-purple-400 text-xs"></i>
                GROUNDED IN SHIPPED PRODUCTION EXPERIENCE
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {currentTrack.experience.map((exp, index) => (
                  <div key={index} className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between text-xs space-y-1">
                    <span className="text-white font-bold text-xs flex items-center gap-1.5">
                      <i className="fa-solid fa-circle-check text-purple-400 text-[10px]"></i>
                      {exp.role}
                    </span>
                    <span className="text-gray-300 font-light text-[11px] leading-snug">{exp.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Stack Proficiency */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                TARGET STACK PROFICIENCY
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {currentTrack.stack.map((tech, index) => (
                  <span key={index} className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-purple-300 text-xs font-semibold hover:border-primary/50 transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Recruiter Executive Digest Box */}
          <div className="w-full lg:w-80 shrink-0 p-4 sm:p-5 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
                  RECRUITER EXECUTIVE DIGEST
                </h4>
                <i className="fa-solid fa-briefcase text-xs text-primary"></i>
              </div>

              {/* Quote Card */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 italic text-[11px] text-gray-300 leading-relaxed">
                "{blurbText}"
              </div>
            </div>

            {/* Recruiter Actions */}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="btn-shimmer w-full py-2.5 px-3.5 rounded-xl bg-primary hover:bg-purple-600 text-black font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
              >
                <i className="fa-solid fa-file-lines text-xs"></i>
                <span>View Verified Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full py-2.5 px-3.5 rounded-xl bg-black/40 border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 text-gray-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-envelope text-xs text-purple-400"></i>
                <span>Connect for Interview</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal Integration */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeLink={hero.resumeLink}
      />
    </section>
  );
}

export default FuturePath;
