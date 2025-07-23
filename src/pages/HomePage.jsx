// src/pages/HomePage.jsx

import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;