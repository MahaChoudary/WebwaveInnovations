import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scrollbar-thin">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;