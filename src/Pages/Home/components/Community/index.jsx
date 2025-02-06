import { Button, Typography } from '@mui/material';
import React from 'react';
import './community.css';
import Person from '../../../../assets/Images/communityPerson.png';
import Picture from '../../../../assets/Images/nigga.png';
import Meeting from '../../../../assets/Images/meeting.png';
import Podcast from '../../../../assets/Images/podcast.png';
import Meet from '../../../../assets/Images/meet.png';
import Play from '../../../../assets/Icons/play.svg';
import Conversation from '../../../../assets/Images/conversation.png';
import { useTranslation } from 'react-i18next';

const Community = () => {
  const { t, i18n } = useTranslation('home');
  // Define the font class: 'rubik' for Persian, no changes for others
  const language = i18n.language;
  const fontClass = language === 'fa' ? 'zain' : '';
  const headingClass='rubik'
  return (
    <section>
      <div
        className={` community-section`}
      >
        <Typography
          variant="h2"
          className={`clr-white community-title ${headingClass}`}
        >
          {t('studentvideoreviews.title')}
        </Typography>
        <div className={`community-header column ${language === 'fa' ? 'alignItems-right' : 'alignItems-left'}`}>
          <Typography
            variant="h3"
            className={`clr-white commmunity-smallHeading ${fontClass}`}
          >
            {t('studentvideoreviews.heading')}
          </Typography>
          <Typography
            variant="p"
            className={`clr-white description community-description ${fontClass}`}
          >
            {t('studentvideoreviews.description')}
          </Typography>
          <Button
            variant="contained"
            className={`community-btn inter ${fontClass}`}
          >
            {t('studentvideoreviews.button')}
          </Button>
        </div>
        <section className="community-stories flex">
          {images.map((imageGroup, index) => (
            <div key={index} className={`community-stories-section`}>
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
      </div>
    </section>
  );
};

export default Community;

let images = [
  {
    column1: [Conversation, Meet, Picture],
    column2: [Meet, Picture, Meeting],
    column3: [Person, Podcast, Conversation, Person],
  },
];
