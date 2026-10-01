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
    <section id="contact" className="max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-6">
      <div className="glass p-6 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-primary/25 relative overflow-hidden shadow-2xl">
        {/* Background Radial Glow */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full inline-block mb-3">
            Let's Build Together
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-4">
            Get in <span className="text-primary">Touch.</span>
          </h2>
          <p className="text-gray-300 text-xs md:text-base leading-relaxed font-light">
            Have an exciting full-stack role, AI project, or software initiative? Feel free to reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Method Cards Grid (2 columns on md/lg screens for full spacious readability) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10 md:mb-12">
          {/* Email Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-lg shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-primary/70 font-bold uppercase tracking-widest">Email</p>
                <p className="text-sm sm:text-base text-white font-semibold tracking-tight whitespace-nowrap overflow-x-auto scrollbar-none">
                  thinkyuvraj@gmail.com
                </p>
              </div>
            </div>
            <button
              onClick={() => handleCopy('thinkyuvraj@gmail.com', 'Email')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold shrink-0 ml-3 transition-colors flex items-center gap-1.5 ${
                copiedText === 'Email'
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary'
              }`}
            >
              {copiedText === 'Email' ? (
                <>
                  <i className="fa-solid fa-check text-[11px]"></i>
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <i className="fa-regular fa-copy text-[11px]"></i>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-lg shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-primary/70 font-bold uppercase tracking-widest">Phone</p>
                <p className="text-sm sm:text-base text-white font-semibold tracking-tight whitespace-nowrap overflow-x-auto scrollbar-none">
                  +91-9639677118
                </p>
              </div>
            </div>
            <button
              onClick={() => handleCopy('+91-9639677118', 'Phone')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold shrink-0 ml-3 transition-colors flex items-center gap-1.5 ${
                copiedText === 'Phone'
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary'
              }`}
            >
              {copiedText === 'Phone' ? (
                <>
                  <i className="fa-solid fa-check text-[11px]"></i>
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <i className="fa-regular fa-copy text-[11px]"></i>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/thinkyuvraj"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-lg shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-primary/70 font-bold uppercase tracking-widest">LinkedIn</p>
                <p className="text-sm sm:text-base text-white font-semibold tracking-tight whitespace-nowrap overflow-x-auto scrollbar-none">
                  thinkyuvraj
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/10 text-gray-300 group-hover:text-primary text-xs font-semibold shrink-0 ml-3 transition-colors flex items-center gap-1.5">
              <span>Open</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/ThinkYuvraj"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-lg shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-primary/70 font-bold uppercase tracking-widest">GitHub</p>
                <p className="text-sm sm:text-base text-white font-semibold tracking-tight whitespace-nowrap overflow-x-auto scrollbar-none">
                  ThinkYuvraj
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/10 text-gray-300 group-hover:text-primary text-xs font-semibold shrink-0 ml-3 transition-colors flex items-center gap-1.5">
              <span>Open</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </div>
          </a>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
              Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="Hi Yuvraj, I'd like to discuss a software engineering opportunity..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            ></textarea>
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="btn-shimmer px-10 py-4 bg-primary hover:bg-purple-600 text-black font-black uppercase text-xs tracking-widest rounded-xl transition-colors shadow-[0_10px_35px_rgba(168,85,247,0.4)] w-full sm:w-auto flex items-center justify-center gap-2 mx-auto"
            >
              <span>{formSubmitted ? 'Message Prepared! Opening Mail App ✓' : 'Send Message'}</span>
              <i className="fa-solid fa-paper-plane text-[10px]"></i>
            </button>
          </div>
        </form>

        {/* Footer Bar Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-12 pt-8 border-t border-white/5">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-xs uppercase font-bold tracking-widest"
            >
              <i className={social.icon}></i> {social.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
