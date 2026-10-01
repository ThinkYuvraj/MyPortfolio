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
    <section id="contact" className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4">
      <div className="glass p-3 sm:p-5 md:p-6 rounded-2xl border border-primary/30 relative overflow-hidden shadow-xl backdrop-blur-2xl">
        {/* Background Radial Glow */}
        <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-2.5 sm:mb-4">
          <span className="text-purple-300 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] bg-purple-500/10 border border-purple-500/30 px-2 py-0.5 rounded-full inline-block mb-0.5">
            LET'S BUILD TOGETHER
          </span>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-1">
            GET IN <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent not-italic">TOUCH.</span>
          </h2>
          <p className="text-gray-300 text-[10px] sm:text-xs font-light leading-tight max-w-xl mx-auto">
            Have an exciting full-stack role, AI project, or software initiative? Feel free to reach out directly or send a message below.
          </p>
        </div>

        {/* Ultra-Compact 2-Column Unboxed Contact Links */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 sm:gap-x-6 sm:gap-y-1.5 max-w-2xl mx-auto mb-2.5 sm:mb-4">
          {/* Email */}
          <div className="py-0.5 px-1 border-b border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-1.5 min-w-0">
              <i className="fa-solid fa-envelope text-primary text-[10px] shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest leading-none">Email</p>
                <a href="mailto:thinkyuvraj@gmail.com" className="text-[10px] sm:text-xs text-white font-semibold hover:text-primary transition-colors block truncate">
                  thinkyuvraj@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('thinkyuvraj@gmail.com', 'Email')}
              className="text-[8px] sm:text-[10px] font-bold text-primary hover:underline shrink-0 ml-1"
            >
              {copiedText === 'Email' ? '✓' : 'Copy'}
            </button>
          </div>

          {/* Phone */}
          <div className="py-0.5 px-1 border-b border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-1.5 min-w-0">
              <i className="fa-solid fa-phone text-primary text-[10px] shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest leading-none">Phone</p>
                <a href="tel:+919639677118" className="text-[10px] sm:text-xs text-white font-semibold hover:text-primary transition-colors block truncate">
                  +91-9639677118
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('+91-9639677118', 'Phone')}
              className="text-[8px] sm:text-[10px] font-bold text-primary hover:underline shrink-0 ml-1"
            >
              {copiedText === 'Phone' ? '✓' : 'Copy'}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/thinkyuvraj"
            target="_blank"
            rel="noreferrer"
            className="py-0.5 px-1 border-b border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <i className="fa-brands fa-linkedin text-primary text-[10px] shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest leading-none">LinkedIn</p>
                <span className="text-[10px] sm:text-xs text-white font-semibold group-hover:text-primary transition-colors block truncate">
                  thinkyuvraj
                </span>
              </div>
            </div>
            <span className="text-[8px] sm:text-[10px] font-bold text-primary group-hover:underline flex items-center gap-0.5 shrink-0 ml-1">
              <span>Open</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[6px]"></i>
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ThinkYuvraj"
            target="_blank"
            rel="noreferrer"
            className="py-0.5 px-1 border-b border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <i className="fa-brands fa-github text-primary text-[10px] shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest leading-none">GitHub</p>
                <span className="text-[10px] sm:text-xs text-white font-semibold group-hover:text-primary transition-colors block truncate">
                  ThinkYuvraj
                </span>
              </div>
            </div>
            <span className="text-[8px] sm:text-[10px] font-bold text-primary group-hover:underline flex items-center gap-0.5 shrink-0 ml-1">
              <span>Open</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[6px]"></i>
            </span>
          </a>
        </div>

        {/* Micro Form Container */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-1.5 sm:space-y-2 text-left">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-2 py-1 bg-white/[0.03] border border-white/10 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-2 py-1 bg-white/[0.03] border border-white/10 rounded-lg sm:rounded-xl text-[10px] sm:text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-[7px] sm:text-[8px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
              Message
            </label>
            <textarea
              required
              rows={1.5}
              placeholder="Hi Yuvraj, I'd like to discuss an opportunity..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-2 py-1 bg-white/[0.03] border border-white/10 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            ></textarea>
          </div>

          <div className="text-center pt-1">
            <button
              type="submit"
              className="btn-shimmer px-5 py-1.5 bg-primary hover:bg-purple-600 text-black font-black uppercase text-[9px] sm:text-[10px] tracking-wider rounded-md sm:rounded-lg transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] w-full sm:w-auto flex items-center justify-center gap-1 mx-auto"
            >
              <span>{formSubmitted ? 'Message Prepared! ✓' : 'Send Message'}</span>
              <i className="fa-solid fa-paper-plane text-[8px]"></i>
            </button>
          </div>
        </form>

        {/* Footer Bar Links */}
        <div className="flex flex-wrap justify-center gap-2 mt-2.5 pt-2 border-t border-white/10">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/10 hover:border-primary/40 text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold"
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
