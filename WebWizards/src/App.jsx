import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default App;