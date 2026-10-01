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

        {/* Simple Unboxed Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-10 md:mb-14">
          {/* Email */}
          <div className="flex items-center justify-between p-3 border-b border-white/10 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-3.5 min-w-0">
              <i className="fa-solid fa-envelope text-primary text-lg shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Email</p>
                <a href="mailto:thinkyuvraj@gmail.com" className="text-sm sm:text-base text-white font-semibold hover:text-primary transition-colors block truncate">
                  thinkyuvraj@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('thinkyuvraj@gmail.com', 'Email')}
              className="text-xs text-primary font-bold hover:underline shrink-0 ml-2"
            >
              {copiedText === 'Email' ? 'Copied! ✓' : 'Copy'}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-3 border-b border-white/10 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-3.5 min-w-0">
              <i className="fa-solid fa-phone text-primary text-lg shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Phone</p>
                <a href="tel:+919639677118" className="text-sm sm:text-base text-white font-semibold hover:text-primary transition-colors block truncate">
                  +91-9639677118
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('+91-9639677118', 'Phone')}
              className="text-xs text-primary font-bold hover:underline shrink-0 ml-2"
            >
              {copiedText === 'Phone' ? 'Copied! ✓' : 'Copy'}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/thinkyuvraj"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3 border-b border-white/10 hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <i className="fa-brands fa-linkedin text-primary text-lg shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">LinkedIn</p>
                <span className="text-sm sm:text-base text-white font-semibold group-hover:text-primary transition-colors block truncate">
                  thinkyuvraj
                </span>
              </div>
            </div>
            <span className="text-xs text-primary font-bold flex items-center gap-1 shrink-0 ml-2">
              <span>Open</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ThinkYuvraj"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3 border-b border-white/10 hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <i className="fa-brands fa-github text-primary text-lg shrink-0"></i>
              <div className="min-w-0 text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">GitHub</p>
                <span className="text-sm sm:text-base text-white font-semibold group-hover:text-primary transition-colors block truncate">
                  ThinkYuvraj
                </span>
              </div>
            </div>
            <span className="text-xs text-primary font-bold flex items-center gap-1 shrink-0 ml-2">
              <span>Open</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </span>
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
