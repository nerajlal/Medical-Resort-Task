import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AboutAyurveda from './components/AboutAyurveda';
import Treatments from './components/Treatments';
import Panchakarma from './components/Panchakarma';
import Therapies from './components/Therapies';
import HealingJourney from './components/HealingJourney';
import YogaComplement from './components/YogaComplement';
import ExpertDoctors from './components/ExpertDoctors';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Watermark from './components/Watermark';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <AboutAyurveda />
      <Treatments />
      <Panchakarma />
      <Therapies />
      <HealingJourney />
      <YogaComplement />
      <ExpertDoctors />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FooterCTA />
      <Footer />
      <FloatingWhatsApp />
      <Watermark />
    </div>
  );
}

export default App;
