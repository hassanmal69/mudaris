import React, { useRef, useEffect } from 'react';
import E_Learn from './components/E_Learn';
import Hero from './components/Hero/Index';
import FAQ from './components/Accordion';
import GetStart from './components/GetStarted';
import PriceCards from './components/PriceCards';
import GettoKnow from './components/GettoKnow/Index';
import DigitalEducation from './components/digitalEducationSlider';
import Community from './components/Community';
import WhatYouGet from './components/WhatYouGet';
import './home.css';
import GetaJob from './components/GetaJob';
import LineCards from './components/ReadIt';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const priceCardsRef = useRef(null);
  const { t, i18n } = useTranslation('home');

  const scrollToPriceCards = () => {
    if (priceCardsRef.current) {
      priceCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 🌍 Automatically set the `dir` attribute when language changes
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <section
      className={`home-page column primary-bg ${
        i18n.language === 'fa' ? 'rtl' : 'ltr'
      }`}
    >
      <Hero />
      <Community />
      <DigitalEducation />
      <LineCards />
      <GetaJob />
      <GettoKnow />
      <WhatYouGet />
      <div className="price" ref={priceCardsRef}>
        <PriceCards />
      </div>

      <E_Learn />
      <FAQ />
      <GetStart />
    </section>
  );
};

export default Home;
