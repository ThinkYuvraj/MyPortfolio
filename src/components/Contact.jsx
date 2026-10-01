import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

function Contact() {
  const { socials } = portfolioData;
  const [copiedText, setCopiedText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto with user's message
    const mailtoUrl = `mailto:thinkyuvraj@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-6">
      <div className="glass p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-primary/30 relative overflow-hidden shadow-2xl backdrop-blur-2xl">
        {/* Background Radial Glow */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-6">
          <span className="text-purple-300 text-[10px] font-bold uppercase tracking-[0.25em] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full inline-block mb-2">
            LET'S BUILD TOGETHER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-none mb-2">
            GET IN <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent not-italic">TOUCH.</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Have an exciting full-stack role, AI project, or software initiative? Feel free to reach out directly or send a message below.
          </p>
        </div>

        {/* Streamlined Unboxed Glass Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto mb-6">
          {/* Email */}
          <div className="py-2 px-2.5 border-b border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <i className="fa-solid fa-envelope text-primary text-sm shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Email</p>
                <a href="mailto:thinkyuvraj@gmail.com" className="text-xs sm:text-sm text-white font-semibold hover:text-primary transition-colors block truncate">
                  thinkyuvraj@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('thinkyuvraj@gmail.com', 'Email')}
              className="text-xs font-bold text-primary hover:text-purple-300 transition-colors px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 shrink-0 ml-2"
            >
              {copiedText === 'Email' ? 'Copied! ✓' : 'Copy'}
            </button>
          </div>

          {/* Phone */}
          <div className="py-2 px-2.5 border-b border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <i className="fa-solid fa-phone text-primary text-sm shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Phone</p>
                <a href="tel:+919639677118" className="text-xs sm:text-sm text-white font-semibold hover:text-primary transition-colors block truncate">
                  +91-9639677118
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('+91-9639677118', 'Phone')}
              className="text-xs font-bold text-primary hover:text-purple-300 transition-colors px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 shrink-0 ml-2"
            >
              {copiedText === 'Phone' ? 'Copied! ✓' : 'Copy'}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/thinkyuvraj"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-2.5 border-b border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <i className="fa-brands fa-linkedin text-primary text-sm shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">LinkedIn</p>
                <span className="text-xs sm:text-sm text-white font-semibold group-hover:text-primary transition-colors block truncate">
                  thinkyuvraj
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-primary group-hover:text-purple-300 transition-colors px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-1 shrink-0 ml-2">
              <span>Open</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ThinkYuvraj"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-2.5 border-b border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <i className="fa-brands fa-github text-primary text-sm shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">GitHub</p>
                <span className="text-xs sm:text-sm text-white font-semibold group-hover:text-primary transition-colors block truncate">
                  ThinkYuvraj
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-primary group-hover:text-purple-300 transition-colors px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-1 shrink-0 ml-2">
              <span>Open</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </span>
          </a>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-3 text-left">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
              Message
            </label>
            <textarea
              required
              rows={2.5}
              placeholder="Hi Yuvraj, I'd like to discuss a software engineering opportunity..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            ></textarea>
          </div>

          <div className="text-center pt-1.5">
            <button
              type="submit"
              className="btn-shimmer px-8 py-3 bg-primary hover:bg-purple-600 text-black font-black uppercase text-xs tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] w-full sm:w-auto flex items-center justify-center gap-2 mx-auto"
            >
              <span>{formSubmitted ? 'Message Prepared! Opening Mail App ✓' : 'Send Message'}</span>
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
        </form>

        {/* Footer Bar Links */}
        <div className="flex flex-wrap justify-center gap-3.5 mt-6 pt-4 border-t border-white/10">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
            >
              <i className={`${social.icon} text-primary`}></i>
              <span>{social.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
