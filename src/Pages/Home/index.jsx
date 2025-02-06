import React, { useRef } from 'react';
import E_Learn from './components/E_Learn';
import Hero from './components/Hero/Index';
import FAQ from './components/Accordion';
import GetStart from './components/GetStarted';
import PriceCards from './components/PriceCards/Index';
import Review from './components/Review/Index';
import GettoKnow from './components/GettoKnow/Index';
import DigitalEducation from './components/digitalEducationSlider';
import Community from './components/Community';
import WhatYouGet from './components/WhatYouGet';
import './home.css';
import GetaJob from './components/GetaJob';
import LineCards from './components/ReadIt';
import Testimonials from './components/Testimonials/Testimonials';
import { GetStartedButton } from './components/GetStartedButton';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const priceCardsRef = useRef(null);
  const { t, i18n } = useTranslation('home');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const scrollToPriceCards = () => {
    if (priceCardsRef.current) {
      priceCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home-page column primary-bg">
      {/* home-page column primary-bg */}
      <Hero />
      <Community />
      <GetaJob />
      {/* <WhatYouGet /> */}
      <DigitalEducation />
      {/* <GetStartedButton onButtonClick={scrollToPriceCards} /> */}
      <LineCards />
      <div className="price" ref={priceCardsRef}>
        <PriceCards />
      </div>
      <GettoKnow />
      <GetStartedButton onButtonClick={scrollToPriceCards} />
      <E_Learn />
      <FAQ />
      <GetStartedButton onButtonClick={scrollToPriceCards} />
      <GetStart />
    </section>
  );
};

export default Home;
