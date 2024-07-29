import './App.css'
import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="text-text-color-main bg-background-color-light">
      <Hero />
      <Benefits />
      <Portfolio />
      <CTA />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
