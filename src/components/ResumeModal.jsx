import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

function ResumeModal({ isOpen, onClose, resumeLink }) {
  const [activeTab, setActiveTab] = useState('ats'); // 'ats' | 'summary' | 'drive'
  const [copiedSection, setCopiedSection] = useState('');

  if (!isOpen) return null;

  const { resumeData } = portfolioData;
  const previewLink = resumeLink.replace('/view?usp=drive_link', '/preview');

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(label);
    setTimeout(() => setCopiedSection(''), 2500);
  };

  const fullResumePlainText = `YUVRAJ SINGH
Noida, India | +91-9639677118 | thinkyuvraj@gmail.com
LinkedIn: https://linkedin.com/in/thinkyuvraj | GitHub: https://github.com/ThinkYuvraj

EDUCATION
--------------------------------------------------
Amity University, Noida
Bachelor of Technology in Computer Science and Engineering | 2022 – 2026
CGPA: 7.33/10

Delhi Public School, Meerut
Senior Secondary | 2022 (84.20%)
High School | 2020 (73.40%)

TECHNICAL SKILLS
--------------------------------------------------
Programming Languages: Python, JavaScript, TypeScript
Backend & APIs: FastAPI, Node.js, Express.js, RESTful API design, JWT Authentication, Socket.io
Databases: SQL, PostgreSQL, MongoDB
Cloud & DevOps: AWS (EC2, Lambda, S3, RDS, VPC, IAM, Auto Scaling), Docker, GitHub Actions
Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS
Developer Tools & Collaboration: Git, GitHub, VS Code, Postman, Google Antigravity

INDUSTRY EXPERIENCE
--------------------------------------------------
MERN Stack Developer Intern | SmartBridge – SmartInternz (May – July 2025)
Technologies used: JavaScript, React, Node.js, Express.js, MongoDB
• Owned the backend build for a real-time chat application end-to-end, turning an open-ended product brief into a working Node.js/Express.js/MongoDB service and React client shipped to production.
• Independently identified and closed authentication and data-access gaps, designing secure auth and storage layers that cut latency and improved reliability without requiring senior sign-off on implementation details.

Web Developer Intern | Jabsz Gaming Studios LLP, Sector-49 Gurgaon | Part-time (May – July 2025)
Technologies used: TypeScript, React, Node.js, Express.js, Godot
• Built a browser-based game using TypeScript, engineering core gameplay mechanics, UI screens, and state-driven transitions across 50+ levels through Godot Engine integration.
• Spotted a performance bottleneck affecting gameplay responsiveness and independently optimized backend service architecture and API interactions to fix it, without being asked to.

PROJECTS
--------------------------------------------------
HireIn – AI Recruitment Platform
Technologies used: React, TypeScript, Node.js, Express.js, PostgreSQL, FastAPI
• Scoped and shipped a scalable AI recruitment platform backend end-to-end, turning a broad "help recruiters screen faster" ask into RESTful APIs, RBAC, and batch resume screening for up to 100 resumes.
• Built a production RAG-based recruiter assistant in Python, integrating FastAPI with a Sentence Transformer embeddings API to power natural-language candidate search and semantic matching, deployed as a live service behind the recruiter dashboard.

Team Task Manager
Technologies used: React.js, TypeScript, Node.js, Express.js, MongoDB, TanStack Query
• Designed REST APIs and real-time backend services with Socket.io for dashboard analytics, task prioritization, and status tracking, integrating TanStack Query for client-side caching and data synchronization.
• Owned a centralized team collaboration platform end-to-end, from problem framing with a 5-person internship team to a piloted RESTful/Socket.io backend, closing a real communication gap and measurably boosting the team's task throughput.

Full-Stack E-Commerce Ordering Platform – Slice & Fire
Technologies used: React.js, TypeScript, Express.js, Node.js, Vite, Node-Cron, Nodemailer
• Built a full-stack e-commerce ordering platform end-to-end — from a custom pizza builder with real-time ingredient selection to inventory-aware order validation — using React 18/Vite, TypeScript, Express.js, and Node.js.
• Engineered a BOM-based inventory automation engine with scheduled Node-Cron jobs and Nodemailer low-stock alerts, replacing manual stock checks with an admin console operations staff could run without any engineering support.

PUBLICATIONS
--------------------------------------------------
"A Novice Approach to Weather Forecasting by Using Hybrid Predictive Methodologies in ML," Proceedings of the IC2SDT, NIT Delhi, India, 2025. IEEE Xplore Document ID: 11383605

CERTIFICATIONS
--------------------------------------------------
• MongoDB Developer Path, MongoDB (July 2025)
• AWS Academy Graduate, AWS Academy Cloud Foundations (January 2025)
• The Joy of Computing Using Python, NPTEL, IIT Madras (July – October 2024)
• Design Thinking: A Primer, NPTEL, IIT Madras (January – February 2024)`;

  return (
    <>
      {/* Hidden container specifically for clean system print to PDF */}
      <div className="print-only-visible hidden">
        <div className="resume-sheet font-serif text-[11pt] leading-tight text-neutral-900 bg-white p-6 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center border-b pb-2 mb-3">
            <h1 className="text-2xl font-bold uppercase tracking-tight text-black">{resumeData.name}</h1>
            <p className="text-xs text-neutral-700 mt-1">
              {resumeData.contact.phone} | {resumeData.contact.email} | {resumeData.contact.linkedinDisplay} | {resumeData.contact.githubDisplay} | {resumeData.contact.location}
            </p>
          </div>

          {/* Education */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-0.5 mb-1.5 text-black">Education</h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="mb-1 text-xs flex justify-between items-start">
                <div>
                  <span className="font-bold">{edu.institution}</span> — <span>{edu.degree}</span>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span>{edu.duration}</span> | <span className="font-semibold">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-0.5 mb-1.5 text-black">Technical Skills</h2>
            <div className="text-xs space-y-0.5">
              {Object.entries(resumeData.technicalSkills).map(([cat, items]) => (
                <p key={cat}>
                  <strong className="font-semibold">{cat}:</strong> {items.join(', ')}
                </p>
              ))}
            </div>
          </div>

          {/* Industry Experience */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-0.5 mb-1.5 text-black">Industry Experience</h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="mb-2 text-xs">
                <div className="flex justify-between font-bold">
                  <span>{exp.role} | {exp.company}</span>
                  <span>{exp.duration}</span>
                </div>
                <p className="italic text-[11px] text-neutral-700">Technologies used: {exp.tech}</p>
                <ul className="list-disc ml-4 space-y-0.5 mt-0.5 text-[11px]">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-0.5 mb-1.5 text-black">Projects</h2>
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="mb-2 text-xs">
                <div className="font-bold">{proj.title}</div>
                <p className="italic text-[11px] text-neutral-700">Technologies used: {proj.tech}</p>
                <ul className="list-disc ml-4 space-y-0.5 mt-0.5 text-[11px]">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Publications */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-0.5 mb-1.5 text-black">Publications</h2>
            {resumeData.publications.map((pub, idx) => (
              <p key={idx} className="text-xs">
                "{pub.title}," {pub.venue}
              </p>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-0.5 mb-1.5 text-black">Certifications</h2>
            <ul className="list-disc ml-4 text-xs space-y-0.5">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{cert.name}</span>, {cert.issuer} ({cert.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Screen Modal */}
      <div className="no-print fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
        <div className="glass w-full max-w-5xl h-[92vh] max-h-[900px] rounded-2xl md:rounded-3xl border border-primary/30 flex flex-col overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          {/* Modal Header */}
          <div className="px-4 md:px-6 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-black/60 backdrop-blur-xl shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 text-primary flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <i className="fa-solid fa-file-invoice"></i>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm md:text-base font-bold text-white tracking-tight">{resumeData.name} — Verified Resume</h3>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    ATS Ready
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">Full-Stack Web Developer • B.Tech CSE (Amity '26)</p>
              </div>
            </div>

            {/* View Mode Tabs */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1 text-xs">
              <button
                onClick={() => setActiveTab('ats')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'ats'
                    ? 'bg-primary text-black shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="fa-solid fa-file-lines text-[11px]"></i>
                <span>Document View</span>
              </button>
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'summary'
                    ? 'bg-primary text-black shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="fa-solid fa-chart-pie text-[11px]"></i>
                <span>Recruiter Summary</span>
              </button>
              <button
                onClick={() => setActiveTab('drive')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'drive'
                    ? 'bg-primary text-black shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className="fa-brands fa-google-drive text-[11px]"></i>
                <span>Google Drive</span>
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                title="Print or Save as PDF"
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-primary/50 transition-all flex items-center gap-1.5"
              >
                <i className="fa-solid fa-print text-[11px]"></i>
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={() => handleCopyText(fullResumePlainText, 'Full Resume')}
                title="Copy entire resume text formatted for ATS submission"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-primary/40 transition-all flex items-center gap-1.5"
              >
                <i className="fa-solid fa-copy text-[11px]"></i>
                <span>{copiedSection === 'Full Resume' ? 'Copied! ✓' : 'Copy Text'}</span>
              </button>

              <a
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-primary/20 border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all flex items-center gap-1.5"
              >
                <span>Drive Link</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary/40 flex items-center justify-center transition-all text-sm ml-1"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto bg-neutral-950/80 p-4 md:p-6 custom-scrollbar">
            {activeTab === 'ats' && (
              <div className="max-w-3xl mx-auto bg-white text-neutral-900 rounded-xl shadow-2xl p-6 sm:p-10 border border-neutral-200 selection:bg-purple-200 selection:text-neutral-950 font-sans">
                {/* Header */}
                <div className="text-center pb-4 mb-4 border-b border-neutral-300">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black uppercase">
                    {resumeData.name}
                  </h1>
                  <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-2 text-xs sm:text-sm text-neutral-700">
                    <a href={`tel:${resumeData.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary hover:underline font-medium">
                      <i className="fa-solid fa-phone text-[10px] mr-1 text-primary"></i>
                      {resumeData.contact.phone}
                    </a>
                    <span>|</span>
                    <a href={`mailto:${resumeData.contact.email}`} className="hover:text-primary hover:underline font-medium">
                      <i className="fa-solid fa-envelope text-[10px] mr-1 text-primary"></i>
                      {resumeData.contact.email}
                    </a>
                    <span>|</span>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline font-medium">
                      <i className="fa-brands fa-linkedin text-[10px] mr-1 text-blue-600"></i>
                      {resumeData.contact.linkedinDisplay}
                    </a>
                    <span>|</span>
                    <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline font-medium">
                      <i className="fa-brands fa-github text-[10px] mr-1 text-neutral-900"></i>
                      {resumeData.contact.githubDisplay}
                    </a>
                    <span>|</span>
                    <span className="text-neutral-600 font-medium">
                      <i className="fa-solid fa-location-dot text-[10px] mr-1 text-red-500"></i>
                      {resumeData.contact.location}
                    </span>
                  </div>
                </div>

                {/* Section: Education */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 mb-2.5 flex items-center justify-between">
                    <span>Education</span>
                  </h2>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-start">
                        <div>
                          <p className="font-bold text-neutral-950">{edu.institution}</p>
                          <p className="text-neutral-700">{edu.degree}</p>
                        </div>
                        <div className="text-left sm:text-right mt-0.5 sm:mt-0">
                          <span className="font-semibold text-neutral-900">{edu.duration}</span>
                          <span className="mx-1.5">•</span>
                          <span className="font-bold text-purple-700">{edu.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Technical Skills */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 mb-2.5 flex items-center justify-between">
                    <span>Technical Skills</span>
                    <button
                      onClick={() =>
                        handleCopyText(
                          Object.entries(resumeData.technicalSkills)
                            .map(([k, v]) => `${k}: ${v.join(', ')}`)
                            .join('\n'),
                          'Skills'
                        )
                      }
                      className="text-[10px] font-semibold text-neutral-600 hover:text-black uppercase tracking-normal"
                    >
                      {copiedSection === 'Skills' ? 'Copied ✓' : 'Copy'}
                    </button>
                  </h2>
                  <div className="text-xs sm:text-sm space-y-1 text-neutral-800">
                    {Object.entries(resumeData.technicalSkills).map(([cat, items]) => (
                      <p key={cat} className="leading-snug">
                        <strong className="font-bold text-neutral-950">{cat}:</strong> {items.join(', ')}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Section: Industry Experience */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 mb-2.5">
                    Industry Experience
                  </h2>
                  <div className="space-y-4 text-xs sm:text-sm">
                    {resumeData.experience.map((exp, idx) => (
                      <div key={idx}>
                        <div className="flex flex-col sm:flex-row sm:justify-between items-baseline font-bold text-neutral-950">
                          <span>{exp.role} | <span className="text-purple-900">{exp.company}</span></span>
                          <span className="text-neutral-600 font-medium text-xs">{exp.duration}</span>
                        </div>
                        <p className="text-xs font-semibold text-neutral-600 mt-0.5">
                          Technologies used: <span className="text-neutral-800 font-normal">{exp.tech}</span>
                        </p>
                        <ul className="list-disc ml-5 mt-1.5 space-y-1 text-neutral-700 leading-relaxed text-xs sm:text-[13px]">
                          {exp.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Projects */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 mb-2.5">
                    Projects
                  </h2>
                  <div className="space-y-4 text-xs sm:text-sm">
                    {resumeData.projects.map((proj, idx) => (
                      <div key={idx}>
                        <div className="font-bold text-neutral-950 text-sm">
                          {proj.title}
                        </div>
                        <p className="text-xs font-semibold text-neutral-600 mt-0.5">
                          Technologies used: <span className="text-neutral-800 font-normal">{proj.tech}</span>
                        </p>
                        <ul className="list-disc ml-5 mt-1.5 space-y-1 text-neutral-700 leading-relaxed text-xs sm:text-[13px]">
                          {proj.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Publications */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 mb-2.5">
                    Publications
                  </h2>
                  {resumeData.publications.map((pub, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                      “{pub.title},” <span className="italic">{pub.venue}</span>
                    </p>
                  ))}
                </div>

                {/* Section: Certifications */}
                <div>
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 mb-2.5">
                    Certifications
                  </h2>
                  <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-neutral-800">
                    {resumeData.certifications.map((cert, idx) => (
                      <li key={idx} className="leading-snug">
                        <span className="font-bold">{cert.name}</span>, {cert.issuer}
                        <span className="text-neutral-600 ml-1.5">({cert.date})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'summary' && (
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Highlights Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="glass p-4 rounded-2xl border border-primary/30 text-center">
                    <p className="text-2xl font-black text-primary">2022–26</p>
                    <p className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mt-1">B.Tech CSE</p>
                    <p className="text-[10px] text-gray-500">Amity University (7.33 CGPA)</p>
                  </div>
                  <div className="glass p-4 rounded-2xl border border-primary/30 text-center">
                    <p className="text-2xl font-black text-white">2 Roles</p>
                    <p className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mt-1">Internships</p>
                    <p className="text-[10px] text-gray-500">SmartBridge & Jabsz Studios</p>
                  </div>
                  <div className="glass p-4 rounded-2xl border border-primary/30 text-center">
                    <p className="text-2xl font-black text-primary">1 Paper</p>
                    <p className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mt-1">IEEE Published</p>
                    <p className="text-[10px] text-gray-500">Weather Forecasting ML</p>
                  </div>
                  <div className="glass p-4 rounded-2xl border border-primary/30 text-center">
                    <p className="text-2xl font-black text-white">4 Certs</p>
                    <p className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mt-1">Certified</p>
                    <p className="text-[10px] text-gray-500">MongoDB, AWS, IIT Madras</p>
                  </div>
                </div>

                {/* Recruiter Quick Contact Card */}
                <div className="bento-card p-6 rounded-2xl border border-primary/30">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-address-card text-primary"></i> Direct Recruiter Channels
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between border border-white/5">
                      <span className="text-gray-400">Email:</span>
                      <div className="flex items-center gap-2">
                        <a href="mailto:thinkyuvraj@gmail.com" className="text-primary font-bold hover:underline">
                          thinkyuvraj@gmail.com
                        </a>
                        <button
                          onClick={() => handleCopyText("thinkyuvraj@gmail.com", "email-recruiter")}
                          className="text-[10px] text-gray-400 hover:text-white"
                        >
                          {copiedSection === 'email-recruiter' ? '✓' : <i className="fa-solid fa-copy"></i>}
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between border border-white/5">
                      <span className="text-gray-400">Phone:</span>
                      <div className="flex items-center gap-2">
                        <a href="tel:+919639677118" className="text-primary font-bold hover:underline">
                          +91-9639677118
                        </a>
                        <button
                          onClick={() => handleCopyText("+919639677118", "phone-recruiter")}
                          className="text-[10px] text-gray-400 hover:text-white"
                        >
                          {copiedSection === 'phone-recruiter' ? '✓' : <i className="fa-solid fa-copy"></i>}
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between border border-white/5">
                      <span className="text-gray-400">LinkedIn:</span>
                      <a href="https://linkedin.com/in/thinkyuvraj" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline flex items-center gap-1">
                        linkedin.com/in/thinkyuvraj <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                      </a>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between border border-white/5">
                      <span className="text-gray-400">GitHub:</span>
                      <a href="https://github.com/ThinkYuvraj" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline flex items-center gap-1">
                        github.com/ThinkYuvraj <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Core Strengths Checklist */}
                <div className="bento-card p-6 rounded-2xl">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-primary"></i> Key Engineering Highlights
                  </h4>
                  <div className="space-y-2.5 text-xs text-gray-300">
                    <div className="flex items-start gap-2.5">
                      <i className="fa-solid fa-check text-emerald-400 mt-0.5 shrink-0"></i>
                      <span><strong>Production Full-Stack Architecture:</strong> Engineered real-time chat, e-commerce order automation, and AI recruitment portals using Node.js, Express, React, and MongoDB/PostgreSQL.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <i className="fa-solid fa-check text-emerald-400 mt-0.5 shrink-0"></i>
                      <span><strong>FastAPI & ML RAG Pipelines:</strong> Shipped semantic candidate matching using Sentence Transformers and FastAPI microservices.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <i className="fa-solid fa-check text-emerald-400 mt-0.5 shrink-0"></i>
                      <span><strong>DevOps & Cloud Ready:</strong> AWS Academy Graduate trained in EC2, Lambda, S3, RDS, VPC, Docker, and GitHub Actions CI/CD.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'drive' && (
              <div className="w-full h-full min-h-[500px] flex flex-col bg-neutral-900 rounded-xl overflow-hidden border border-white/10">
                <div className="px-4 py-2 bg-black/40 flex items-center justify-between border-b border-white/5 text-xs text-gray-400">
                  <span>Google Drive PDF Viewer</span>
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    Open in new tab <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>
                <iframe
                  src={previewLink}
                  title="Yuvraj Singh Resume"
                  className="w-full flex-1 border-0 min-h-[500px]"
                  allow="autoplay"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeModal;

