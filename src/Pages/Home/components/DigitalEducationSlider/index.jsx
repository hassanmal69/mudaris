import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DigitalEducation.css';

import Development from '@assets/Images/Developmentimg.png';
import Design from '@assets/Images/Designimg.png';
import Marketing from '@assets/Images/Marketingimg.png';
import Business from '@assets/Images/Businessimg.png';
import DataScience from '@assets/Images/DataScienceimg.png';
import Technology from '@assets/Images/Technologyimg.png';

const educationImages = [
  Development,
  Design,
  Marketing,
  Business,
  DataScience,
  Technology,
  Development,
  Design,
  Marketing,
  Business,
  DataScience,
  Technology,
];

export default function DigitalEducation() {
  const { t, i18n } = useTranslation('home');
  const language = i18n.language;
  const fontClass = language === 'fa' ? 'rubik' : 'inter';
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: !isPaused, // Autoplay is paused when mouse is hovered
    autoplaySpeed: 1,
    cssEase: 'linear',
    pauseOnHover: true, // We handle pausing manually
    responsive: [
      { breakpoint: 1544, settings: { slidesToShow: 5, slidesToScroll: 3, dots: true } },
      { breakpoint: 1044, settings: { slidesToShow: 4, slidesToScroll: 3, dots: true } },
      { breakpoint: 960, settings: { slidesToShow: 3, slidesToScroll: 2, dots: false } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 2, dots: false } },
      { breakpoint: 670, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2.3, slidesToScroll: 1, dots: false } },
    ],
  };

  return (
    <section className="DigitalEducationComponent">
      <Slider
        {...settings}
        onMouseEnter={() => setIsPaused(true)}  // Pause slider when mouse enters
        onMouseLeave={() => setIsPaused(false)} // Resume slider when mouse leaves
      >
        {educationImages.map((img, index) => {
          const title = t(`digitaleducationcards.${index}.title`, { defaultValue: '' });
          const newLabel = t(`digitaleducationcards.${index}.new`, { defaultValue: '' });
          const description = t(`digitaleducationcards.${index}.des`, { defaultValue: '' });

          return (
            <Box
              key={index}
              className="PicBgDigitalEducationSlide"
              sx={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
            >
              <Box className="DigitalEducationSlideNewandPicBox">
                <Box className="DigitalEducationSlideNewChildBox">
                  {newLabel && (
                    <Typography
                      variant="body"
                      className={`${language === 'persian' ? 'DigitalEducationSlideNew clr-white rubik' : 'DigitalEducationSlideNew clr-white dm-sans'}`}
                    >
                      {newLabel}
                    </Typography>
                  )}
                </Box>
              </Box>

              <Box
                className={hoveredIndex === index ? 'DigitalEducationSlideTitleandPicBoxwith-description' : 'DigitalEducationSlideTitleandPicBox'}
              >
                <Typography
                  variant="h5"
                  className={`${language === 'persian' ? 'DigitalEducationCardTitle clr-white rubik' : 'DigitalEducationCardTitle clr-white inter'}`}
                >
                  {title}
                </Typography>

                {/* Show description only on hover */}
                {hoveredIndex === index && description && (
                  <Typography variant="body2"
                  className={`DigitalEducationCardDescription clr-white ${hoveredIndex === index ? 'visible' : ''}`}>
                  {description}
                  </Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </Slider>

      <Box className="DigitalEducationComponentTextComponent">
        <Typography variant="h1" className={`DigitalEducationComponentMainTitle clr-white ${fontClass}`}>
          {t('digitaleducation.headtitle')}
        </Typography>
      </Box>
    </section>
  );
}
