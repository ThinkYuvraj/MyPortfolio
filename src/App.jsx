import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FuturePath from './components/FuturePath';
import CareerPath from './components/CareerPath';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CanvasBackground from './components/CanvasBackground';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FuturePath />
      <CareerPath />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
