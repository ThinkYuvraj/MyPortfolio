import React from 'react';
import { portfolioData } from '../data/portfolio';

function Contact() {
  const { socials } = portfolioData;

  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 md:py-32 px-6 text-center">
      <div className="glass p-10 md:p-24 rounded-[3rem] md:rounded-[4rem] border border-primary/20 relative overflow-hidden group">
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 uppercase leading-none">
          Get in <span className="text-primary italic">Touch.</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all flex items-center gap-2 text-sm uppercase font-bold tracking-widest">
              <i className={social.icon}></i> {social.text}
            </a>
          ))}
        </div>

        <a href="mailto:thinkyuvraj@gmail.com"
          className="px-12 py-5 bg-primary text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:scale-110 shadow-[0_20px_50px_rgba(168,85,247,0.4)] transition-all inline-block">
          Start a Conversation
        </a>
      </div>
    </section>
  );
}

export default Contact;
