import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CareerPath from './components/CareerPath';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CanvasBackground from './components/CanvasBackground';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <CanvasBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CareerPath />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
