import React from 'react';
import HeroSection from './HeroSection';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="bg-lightGray dark:bg-deepBlue text-deepBlue dark:text-lightGray">
      <section id="hero" className="scroll-mt-20">
        <HeroSection />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default Home;