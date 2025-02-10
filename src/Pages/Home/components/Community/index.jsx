import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './community.css';
import Person from '../../../../assets/Images/communityPerson.png';
import Picture from '../../../../assets/Images/nigga.png';
import Meeting from '../../../../assets/Images/meeting.png';
import Podcast from '../../../../assets/Images/podcast.png';
import Meet from '../../../../assets/Images/meet.png';
import Play from '../../../../assets/Icons/play.svg';
import Conversation from '../../../../assets/Images/conversation.png';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import { GetStartedButton } from '../getStartedButton';
import { priceCardsRef } from '../../index';

const Community = () => {
  const { t, i18n } = useTranslation('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const scrollToPriceCards = () => {
    if (priceCardsRef.current) {
      priceCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const language = i18n.language;
  const fontClass = language === 'fa' ? 'zain' : '';
  const headingClass = 'rubik';

  let images = [
    {
      column1: [Conversation, Meet, Picture],
      column2: [Meet, Picture, Meeting],
      column3: [Person, Podcast, Conversation, Person],
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    draggable: false,
  };

  return (
    <section className="community-section">
      <Typography
        variant="h2"
        className={`clr-white mobHeading community-title ${headingClass}`}
      >
        {t('studentvideoreviews.title')}
      </Typography>

      {/* Updated community-header with center alignment on mobile */}
      <div
        className={`community-header column ${
          language === 'fa' ? 'alignItems-right' : 'alignItems-left'
        } ${isMobile ? 'center flex-center' : ''}`}
      >
        <Typography
          variant="h3"
          className={`clr-white commmunity-smallHeading ${fontClass}`}
        >
          {t('studentvideoreviews.heading')}
        </Typography>
        <Typography
          variant="body1"
          className={`clr-white community-description ${fontClass}`}
        >
          {t('studentvideoreviews.description')}
        </Typography>

        <GetStartedButton onButtonClick={scrollToPriceCards} />
      </div>

      {/* Mobile View - Slider */}
      {isMobile ? (
        <Slider {...sliderSettings} className="community-slider">
          {images.map((imageGroup, index) =>
            Object.keys(imageGroup).map((column, i) =>
              imageGroup[column].map((img, idx) => (
                <div
                  key={`${index}-${i}-${idx}`}
                  className="community-video-container"
                >
                  <span className="community-overlay-play">
                    <img src={Play} alt="play-icon" />
                  </span>
                  <img src={img} alt={`image-${idx}`} className="video-img" />
                </div>
              ))
            )
          )}
        </Slider>
      ) : (
        // Desktop View - Grid
        <section className="community-stories flex">
          {images.map((imageGroup, index) => (
            <div key={index} className="community-stories-section">
              {Object.keys(imageGroup).map((column, i) => (
                <div key={i} className="column stories-wrapper">
                  {imageGroup[column].map((img, idx) => (
                    <div className="community-video-container" key={idx}>
                      <span className="community-overlay-play">
                        <img src={Play} alt="play-icon" />
                      </span>
                      <img
                        src={img}
                        alt={`image-${idx}`}
                        className="video-img"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </section>
      )}
    </section>
  );
};

export default Community;
