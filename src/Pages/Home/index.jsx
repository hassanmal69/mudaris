import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
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
import Timeline from './components/newLine/index.jsx';
export const priceCardsRef = React.createRef();

const Home = () => {
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

  // 🌟 Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      className={`home-page column primary-bg ${
        i18n.language === 'fa' ? 'rtl' : 'ltr'
      }`}
    >
      {/* <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        id="community"
        variants={fadeInUp}
      >
        <Community />
      </motion.div> 

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <GetaJob />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        id="slider"
      >
        <DigitalEducation />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        id="whatyouget"
      >
        <WhatYouGet />
      </motion.div> */}

      <div className="priceCarddiv" ref={priceCardsRef}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="price"
          id="priceCard"
        >
          <PriceCards />
        </motion.div>
      </div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <LineCards />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <Timeline />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="GetToknowMainSection"
        viewport={{ once: true }}
        id="gettoknow"
      >
        <GettoKnow />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <E_Learn />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        id="faq"
      >
        <FAQ />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <GetStart />
      </motion.div>  */}
    </section>
  );
};

export default Home;
