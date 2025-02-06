import { Box, Typography } from '@mui/material';
import React from 'react';
import './Elearn.css';
import Home from '@assets/Icons/Home.svg';
import CaseStudy from '@assets/Icons/caseStudy.svg';
import Discussion from '@assets/Icons/communication.svg';
import Schedule from '@assets/Icons/scheduel.svg';
import Certificate from '@assets/Icons/diploma.svg';
import Upload from '@assets/Icons/upload.png';
import { useTranslation } from 'react-i18next';

const E_Learn = () => {
  const { t } = useTranslation('home');
  let language = 'persian';

  // Icons Array
  let imgs = [Home, CaseStudy, Discussion, Schedule, Certificate, Upload];

  return (
    <section className="Elearn-section">
      <div className="width-90 why-cards-container">
        {/* Title */}
        <Typography
          component="h6"
          className={`fs-48 why-title clr-white ${
            language === 'persian' ? `align-right rubik` : `align-left inter`
          }`}
        >
          {t('whyElearn.0.title')}
        </Typography>

        {/* Cards Section */}
        <Box
          component="div"
          className={`why_card_wrapper flex border-gradient ${
            language === 'persian' ? `row-reverse` : ``
          }`}
        >
          {imgs.map((image, index) => (
            <React.Fragment key={index}>
              <Box component="div" className="why_card column">
                <Box component="div" className="why-img-wrapper">
                  <img src={image} alt={`icon-${index}`} />
                </Box>
                <Typography
                  variant="body1"
                  className={`${
                    language === 'persian'
                      ? 'why-card-content rubik'
                      : 'why-card-content inter'
                  }`}
                >
                  {t(`whyElearn.1.${index}`)}
                </Typography>
              </Box>
              <div className="vertical"></div>
              {(index + 1) % 3 === 0 && index !== imgs.length - 1 && (
                <div className="horizontal-line"></div>
              )}
            </React.Fragment>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default E_Learn;
