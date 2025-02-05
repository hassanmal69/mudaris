import React from 'react';
import './getajob.css';
import { Box } from '@mui/material';
import MudarisVideo from '@assets/Images/AgencyNavigatorMale.mp4'; // Video import
import { useTranslation } from 'react-i18next';
const GetaJob = () => {
  const { t } = useTranslation('home');

  return (
    <section className="getajob-container">
      <Box className="getajob-heading">
        <h1
        // className={`clr-white ${language === 'persian' ? 'rubik' : 'inter'}`}
        >
          {t('getajob.headtitle')}
        </h1>
      </Box>
      {/* <div className="getajob-infobox">
        <p
          className={`getajob-info ${language === 'persian' ? 'rubik' : 'inter'}`}
        >
          {t(getajob.contentinfobox)}
        </p>
      </div> */}
      <Box className="getajob-content">
        <div className="getajob-paragraphs">
          <div className="getajobParaforbg">
            <div className="getajobparacontentonly">
              <p
              // className={`getajob-para ${language === 'persian' ? 'rubik' : 'dm-sans'}`}
              >
                {t('getajob.descriptionpara1')}
              </p>
              <div className="getajob-para">
                <p
                // className={`getajob-qa ${language === 'persian' ? 'rubik' : 'dm-sans'}`}
                >
                  {t('getajob.descriptionpara2')}
                </p>
              </div>
              <p
              // className={`getajob-qa ${language === 'persian' ? 'rubik' : 'dm-sans'}`}
              >
                {t('getajob.descriptionpara3')}
              </p>
              <p
              // className={`getajob-qa ${language === 'persian' ? 'rubik' : 'dm-sans'}`}
              >
                {t('getajob.descriptionpara4')}
              </p>
            </div>
          </div>
          <div className="getajobParaforbg">
            <p
            // className={`getajob-para ${language === 'persian' ? 'rubik' : 'dm-sans'}`}
            >
              {t('getajob.descriptionpara3')}
            </p>
          </div>
          <div className="getajobParaforbg">
            <p
            // className={`getajob-para ${language === 'persian' ? 'rubik' : 'dm-sans'}`}
            >
              {t('getajob.descriptionpara4')}
            </p>
          </div>
          {/* <div className="getajobParaforbg">
            <div className="getajob-para">
              <p
                className={`getajob-knwothat ${language === 'persian' ? 'rubik' : 'dm-sans'}`}
              >
                {t('getajob.descriptionparaknowthat1')}
              </p>
              <p
                className={`getajob-knwothat ${language === 'persian' ? 'rubik' : 'dm-sans'}`}
              >
                {getajob.descriptionparaknowthat2}
              </p>
            </div>
          </div> */}

          {/* Infinite looping video */}
          <div className="logodiv">
            <video width="100%" autoPlay loop muted>
              <source src={MudarisVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default GetaJob;
