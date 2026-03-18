
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductSection } from './components/ProductSection';
import { OriginSection } from './components/OriginSection';
import { AboutSection } from './components/AboutSection';
import { HRSection } from './components/HRSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen main-gradient flex flex-col selection:bg-purple-300 selection:text-purple-900">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductSection />
        <OriginSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
