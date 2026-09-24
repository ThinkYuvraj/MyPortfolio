import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolio';

// Interactive Target Roles for 2026
const TARGET_ROLES = [
  {
    id: 'fullstack',
    title: 'Full-Stack Software Engineer',
    badge: 'MERN & Next.js Stack',
    icon: 'fa-solid fa-layer-group',
    color: 'from-purple-500 to-indigo-500',
    borderColor: 'border-primary/50',
    accent: 'text-primary',
    tagBg: 'bg-primary/15',
    headline: 'Building End-to-End Responsive Web Apps & Scalable APIs',
    summary: 'Ready to drive end-to-end feature ownership from pixel-perfect React/Next.js client interfaces to robust Node.js/Express backend services and relational/NoSQL databases.',
    dayOneImpact: [
      'Architecting responsive, accessible UI components with React.js, Tailwind CSS, and TypeScript',
      'Implementing secure RESTful API endpoints with JWT authentication and RBAC',
      'Integrating third-party APIs, payment webhooks, and database query optimizations'
    ],
    verifiedProof: [
      { name: 'MarketinGlu Intern', note: 'Shipping live client web components and REST APIs' },
      { name: 'SmartBridge MERN Intern', note: 'Engineered real-time chat with Socket.io & JWT' },
      { name: 'HireIn Platform', note: 'Full-stack AI recruitment platform with FastAPI & React' }
    ],
    stack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    recruiterBlurb: 'Yuvraj Singh is a 2026 B.Tech CSE graduate (Amity, 7.33 CGPA) with verified production internship experience at MarketinGlu and SmartBridge. Full-stack proficiency across React, Node.js, and cloud deployments.'
  },
  {
    id: 'backend',
    title: 'Backend & Systems Engineer',
    badge: 'FastAPI, Node.js & Databases',
    icon: 'fa-solid fa-server',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/50',
    accent: 'text-emerald-400',
    tagBg: 'bg-emerald-500/15',
    headline: 'Engineering High-Throughput REST APIs & Data Pipelines',
    summary: 'Focused on designing performant server architectures, automated background cron jobs, database indexing, and secure service integrations with zero downtime.',
    dayOneImpact: [
      'Designing structured RESTful APIs with FastAPI (Python) and Express.js (Node.js)',
      'Optimizing PostgreSQL and MongoDB schemas, indexes, and aggregation pipelines',
      'Automating backend processes with node-cron, Nodemailer, and event emitters'
    ],
    verifiedProof: [
      { name: 'Slice & Fire', note: 'Automated inventory workflows & node-cron replenishment' },
      { name: 'Team Task Manager', note: 'Socket.io real-time board updates & task dispatching' },
      { name: 'Weatherly System', note: 'Predictive backend with Hybrid ML data pipelines' }
    ],
    stack: ['Node.js', 'FastAPI (Python)', 'Express.js', 'PostgreSQL', 'MongoDB', 'RESTful APIs', 'Socket.io', 'JWT/Auth'],
    recruiterBlurb: 'Yuvraj Singh specializes in backend architectures with Node.js and FastAPI. Verified experience with database optimization, real-time WebSockets, and automated microservices.'
  },
  {
    id: 'cloud-sde',
    title: 'Cloud & Scalability Engineer',
    badge: 'AWS Foundations & Microservices',
    icon: 'fa-solid fa-cloud-arrow-up',
    color: 'from-sky-500 to-blue-600',
    borderColor: 'border-sky-500/50',
    accent: 'text-sky-400',
    tagBg: 'bg-sky-500/15',
    headline: 'Deploying Resilient, Cloud-Native Architectures',
    summary: 'Synthesizing AWS Cloud Foundations with modern DevOps practices to deliver highly available, monitored, and securely deployed web applications.',
    dayOneImpact: [
      'Deploying web applications to AWS and modern cloud platforms with CI/CD',
      'Configuring cloud storage, environment security, and network CORS policies',
      'Applying cloud cost optimization and infrastructure design principles'
    ],
    verifiedProof: [
      { name: 'AWS Academy Graduate', note: 'Cloud Foundations certified credential (Jan 2025)' },
      { name: 'IEEE Publication', note: 'Hybrid predictive modeling published on IEEE Xplore' },
      { name: 'MongoDB Developer Path', note: 'Certified data modeling and indexing' }
    ],
    stack: ['AWS Cloud', 'Docker Basics', 'Postman', 'Git / GitHub Actions', 'REST Architecture', 'Vercel / Render', 'Linux CLI'],
    recruiterBlurb: 'AWS Academy Cloud Foundations graduate with hands-on full-stack engineering and published IEEE ML research. Strong foundation in cloud architectures, data pipelines, and scalable APIs.'
  }
];

// Active R&D & Tech Horizon (What I'm Learning Next)
const TECH_HORIZON = [
  {
    title: 'High-Throughput Caching',
    tech: 'Redis & In-Memory Stores',
    status: 'Active Study',
    statusColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    icon: 'fa-solid fa-bolt',
    description: 'Implementing distributed caching layers, rate limiting, and session management to reduce database query loads by up to 80%.'
  },
  {
    title: 'Containerization & CI/CD',
    tech: 'Docker & GitHub Actions',
    status: 'Prototyping',
    statusColor: 'bg-primary/15 text-primary border-primary/30',
    icon: 'fa-brands fa-docker',
    description: 'Containerizing full-stack environments for deterministic local dev and automated integration/deployment test pipelines.'
  },
  {
    title: 'Distributed Message Queues',
    tech: 'RabbitMQ / Kafka Basics',
    status: 'Roadmapped',
    statusColor: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    icon: 'fa-solid fa-network-wired',
    description: 'Decoupling compute-heavy operations like email batches and RAG vector indexing into asynchronous background queues.'
  },
  {
    title: 'Vector Search & Modern AI APIs',
    tech: 'Sentence Transformers & RAG',
    status: 'Deployed in HireIn',
    statusColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    icon: 'fa-solid fa-brain',
    description: 'Extending production search capabilities using cosine embeddings and semantic vector retrieval for intelligent matching.'
  }
];

// Chronological Strategic Horizon Milestones
const STRATEGIC_STEPS = [
  {
    step: '01',
    period: 'Current (2025–2026)',
    title: 'Production Impact & Internships',
    subtitle: 'MarketinGlu & Capstone Project',
    tag: 'Active Focus',
    tagColor: 'bg-primary/20 text-primary border-primary/40',
    desc: 'Delivering client-facing web components, refining REST APIs at MarketinGlu, and completing the B.Tech CSE capstone at Amity University.'
  },
  {
    step: '02',
    period: 'Mid 2026',
    title: 'B.Tech Degree Completion',
    subtitle: 'Amity University, Noida (7.33 CGPA)',
    tag: 'Approaching',
    tagColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    desc: 'Formal graduation with Computer Science & Engineering degree, backed by published IEEE ML research and AWS credentials.'
  },
  {
    step: '03',
    period: '2026 Target',
    title: 'Full-Time SDE Induction',
    subtitle: 'High-Ownership Engineering Team',
    tag: 'Target Horizon',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    desc: 'Joining a progressive engineering team as a Software Engineer (SDE), contributing to scalable web platforms, APIs, and microservices.'
  },
  {
    step: '04',
    period: '2027+',
    title: 'Distributed Systems & Scale',
    subtitle: 'Architectural Specialization',
    tag: 'Long-Term Vision',
    tagColor: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    desc: 'Deepening expertise in distributed systems, event-driven architectures, and high-concurrency cloud infrastructure.'
  }
];

function ProjectRoadmap({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('roles'); // 'roles' | 'radar' | 'timeline'
  const [selectedRoleId, setSelectedRoleId] = useState('fullstack');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const selectedRole = TARGET_ROLES.find(r => r.id === selectedRoleId) || TARGET_ROLES[0];

  const handleCopyRecruiterPitch = () => {
    navigator.clipboard.writeText(selectedRole.recruiterBlurb);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section id="roadmap" aria-labelledby="roadmap-heading" className="max-w-6xl mx-auto py-12 md:py-24 px-4 sm:px-6 relative z-10">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 md:w-[32rem] h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Header with Live Hiring Tag */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3 py-1 rounded-full inline-block">
              Career Trajectory & 2026 Focus
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Open for 2026 SDE Roles
            </span>
          </div>

          <h2 id="roadmap-heading" className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Future <span className="text-primary">Path</span> & Horizon
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-1.5 max-w-2xl font-normal leading-relaxed">
            An interactive roadmap of target engineering roles, immediate day-one impact for engineering teams, and upcoming technical capabilities for 2026.
          </p>
        </div>

        {/* View / Experience Mode Switcher */}
        <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setActiveTab('roles')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'roles'
                ? 'bg-primary text-black shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-crosshairs text-xs"></i>
            <span>Role Matcher</span>
          </button>
          <button
            onClick={() => setActiveTab('radar')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'radar'
                ? 'bg-primary text-black shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-satellite-dish text-xs"></i>
            <span>Tech Radar</span>
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'timeline'
                ? 'bg-primary text-black shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-route text-xs"></i>
            <span>Milestones</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          MODE 1: TARGET ROLE MATCHER & DAY-1 IMPACT SIMULATOR
         ======================================================== */}
      {activeTab === 'roles' && (
        <div className="space-y-6">
          {/* Role Selection Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TARGET_ROLES.map((role) => {
              const isSelected = role.id === selectedRoleId;
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRoleId(role.id)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/10 border-primary shadow-[0_0_25px_rgba(168,85,247,0.25)] ring-1 ring-primary/60'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${role.tagBg} ${role.accent} border border-white/5`}>
                        {role.badge}
                      </span>
                      <i className={`${role.icon} ${role.accent} text-sm`}></i>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white leading-snug">
                      {role.title}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-400">
                    <span>Target: 2026 Batch</span>
                    <span className={`font-bold ${isSelected ? 'text-primary' : 'text-gray-500'}`}>
                      {isSelected ? 'Viewing Track ✓' : 'Click to Inspect →'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Role Deep Dive Display */}
          <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.005} transitionSpeed={2500}>
            <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8 border border-primary/40 relative overflow-hidden shadow-2xl">
              {/* Top gradient highlight strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-500"></div>

              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  {/* Title & Badge */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md ${selectedRole.tagBg} ${selectedRole.accent} border border-white/10`}>
                        {selectedRole.badge}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold">
                        <i className="fa-solid fa-bullseye text-primary mr-1"></i>
                        Target Full-Time Track
                      </span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">
                      {selectedRole.title}
                    </h3>
                    <p className={`text-xs md:text-sm font-semibold ${selectedRole.accent} mt-0.5`}>
                      {selectedRole.headline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                    {selectedRole.summary}
                  </p>

                  {/* Day-1 Production Impact Checklist */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-2">
                      <i className="fa-solid fa-bolt-lightning text-amber-400 text-xs"></i>
                      <span>Immediate Day-One Deliverables:</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedRole.dayOneImpact.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Proof in Portfolio */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                      <i className="fa-solid fa-shield-halved text-primary text-xs"></i>
                      <span>Demonstrated in Authentic Experience & Projects:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {selectedRole.verifiedProof.map((proof, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                          <p className="text-xs font-bold text-white">{proof.name}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">{proof.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mr-1">Stack Readiness:</span>
                    {selectedRole.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] md:text-xs bg-white/10 border border-white/10 text-gray-200 px-2.5 py-0.5 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recruiter Quick Action Box */}
                <div className="w-full lg:w-72 shrink-0 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between gap-4 self-stretch shadow-inner">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                        Hiring Quick Pitch
                      </span>
                      <i className="fa-solid fa-briefcase text-xs text-gray-400"></i>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed italic bg-black/50 p-3 rounded-xl border border-white/5">
                      "{selectedRole.recruiterBlurb}"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={handleCopyRecruiterPitch}
                      className="w-full py-2.5 px-3 rounded-xl bg-primary text-black font-bold uppercase text-[10px] tracking-wider hover:scale-105 transition-all flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <i className={`fa-solid ${copiedNotification ? 'fa-check' : 'fa-copy'} text-xs`}></i>
                      <span>{copiedNotification ? 'Pitch Copied to Clipboard!' : 'Copy Recruiter Blurb'}</span>
                    </button>

                    <button
                      onClick={onOpenResume}
                      className="w-full py-2.5 px-3 rounded-xl glass border border-primary/40 text-white font-bold uppercase text-[10px] tracking-wider hover:bg-primary/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <i className="fa-solid fa-file-invoice text-primary text-xs"></i>
                      <span>View Verified Resume</span>
                    </button>

                    <a
                      href="#contact"
                      className="w-full py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-bold uppercase text-[10px] tracking-wider hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1.5 text-center"
                    >
                      <i className="fa-regular fa-envelope text-xs"></i>
                      <span>Connect for Interview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      )}

      {/* ========================================================
          MODE 2: TECHNICAL EXPLORATION RADAR
         ======================================================== */}
      {activeTab === 'radar' && (
        <div className="space-y-6">
          <div className="glass p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Active Engineering Exploration & Continuous Up-skilling for 2026</span>
            </div>
            <span className="text-[11px] text-gray-400">
              Expanding beyond core MERN & FastAPI into cloud-scale paradigms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TECH_HORIZON.map((item, idx) => (
              <Tilt key={idx} tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2500}>
                <div className="bento-card p-5 md:p-6 rounded-2xl border border-white/10 h-full flex flex-col justify-between hover:border-primary/50 transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.statusColor}`}>
                        {item.status}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                        <i className={item.icon}></i>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary mb-2">
                      {item.tech}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-400">
                    <span>Applied to: Production Backend Systems</span>
                    <i className="fa-solid fa-arrow-right text-gray-500"></i>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          MODE 3: STRATEGIC CHRONOLOGICAL MILESTONES
         ======================================================== */}
      {activeTab === 'timeline' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STRATEGIC_STEPS.map((step, idx) => (
              <Tilt key={idx} tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={2500}>
                <div className="bento-card p-5 rounded-2xl h-full flex flex-col justify-between border border-white/10 hover:border-primary/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-2xl font-black italic tracking-tighter text-primary/60 font-mono">
                        {step.step}
                      </span>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${step.tagColor}`}>
                        {step.tag}
                      </span>
                    </div>

                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                      {step.period}
                    </p>
                    <h3 className="text-sm md:text-base font-bold text-white mb-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary mb-2.5">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-gray-400 flex items-center justify-between">
                    <span>Verified Target</span>
                    <i className="fa-solid fa-circle-check text-emerald-400"></i>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      )}

      {/* Quick Dossier Footer Banner */}
      <div className="mt-8 p-4 md:p-6 rounded-2xl glass border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-lg shrink-0">
            <i className="fa-solid fa-id-card-clip"></i>
          </div>
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              2026 Batch Candidate Profile
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Amity B.Tech CSE (7.33 CGPA) • MarketinGlu & SmartBridge Intern • IEEE Published • AWS Certified Foundations
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onOpenResume}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-primary text-black font-bold uppercase text-xs tracking-wider hover:scale-105 transition-all text-center"
          >
            Full Resume
          </button>
          <a
            href="#contact"
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white font-bold uppercase text-xs tracking-wider hover:bg-white/20 transition-all text-center"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectRoadmap;
