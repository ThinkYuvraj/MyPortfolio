import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectRoadmap from './components/ProjectRoadmap';
import CareerPath from './components/CareerPath';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

import CanvasBackground from './components/CanvasBackground';
import CursorSpotlight from './components/CursorSpotlight';
import MobileQuickBar from './components/MobileQuickBar';
import { portfolioData } from './data/portfolio';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResume = () => setIsResumeModalOpen(true);
  const closeResume = () => setIsResumeModalOpen(false);

  return (
    <>
      <CanvasBackground />
      <CursorSpotlight />
      <Navbar onOpenResume={openResume} />
      <main id="main-content">
        <Hero onOpenResume={openResume} />
        <About onOpenResume={openResume} />
        <Skills onOpenResume={openResume} />
        <Projects />
        <ProjectRoadmap onOpenResume={openResume} />
        <CareerPath onOpenResume={openResume} />
        <Contact />
      </main>
      <Footer />
      <MobileQuickBar onOpenResume={openResume} />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={closeResume}
        resumeLink={portfolioData.hero.resumeLink}
      />
    </>
  );
}

export default App;
