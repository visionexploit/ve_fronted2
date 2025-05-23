import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Testimonials from '../Testimonials';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;