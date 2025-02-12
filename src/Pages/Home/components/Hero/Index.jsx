import React, { useState, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import './style.css';
import BlurGlow from '@assets/Images/blur2.svg';
import { useTranslation } from 'react-i18next';
import { GetStartedButton } from '../GetStartedButton/index.jsx';
import { priceCardsRef } from '../../index';
const Hero = () => {
  const { t, i18n } = useTranslation('home');
  const scrollToPriceCards = () => {
    if (priceCardsRef.current) {
      priceCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [video, setVideo] = useState(false);
  const videoRef = useRef(null);
  const language = i18n.language;
  const videoPlay = () => {
    setVideo((prevState) => {
      const newVideoState = !prevState;
      if (newVideoState) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      return newVideoState;
    });
  };
  return (
    <Container className="HeroPagecontainer">
      <Box className="ContainerContent">
        <Box className="ContainerText">
          <Typography
            variant="h1"
            className={`${
              language === 'fa'
                ? 'persianHeading clr-white rubik'
                : 'mainHeading inter'
            }`}
          >
            {t('Introduction.title')}
          </Typography>

          <Typography
            variant="body1"
            className={`${
              language === 'fa'
                ? 'persianDescription clr-white zain'
                : 'mainDescription inter'
            }`}
          >
            {t('Introduction.description')}
          </Typography>
          <div className="HeroComponentButtonDiv">
            <GetStartedButton onButtonClick={scrollToPriceCards} />
          </div>
          <span className="hero-bg-lines">
            <img src={BlurGlow} className="BlurGlow" alt="Blur effect" />
          </span>
        </Box>

        {/* Video Container */}
        <div className="video-container">
          <iframe
            className="LandingPageVideo"
            src="https://customer-a4r494riw1l661m0.cloudflarestream.com/94141ba624760c0e2421e603de1caa12/iframe?poster=https%3A%2F%2Fcustomer-a4r494riw1l661m0.cloudflarestream.com%2F94141ba624760c0e2421e603de1caa12%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
      </Box>
    </Container>
  );
};

export default Hero;

{
  /* {showPlayButton && (
              <span className="hero-play-wrapper video-fade-in">
                <img src={Play} alt="Play Video" />
              </span>
            )} */
}
