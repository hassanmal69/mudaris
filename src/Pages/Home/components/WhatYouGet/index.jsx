import React, { useRef } from 'react';
import './whatyouget.css';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import playbuttonimg from '../../../../assets/icons/playbuttonimg.png'; // Replace with actual play button image
const WhatYouGet = () => {
  const { t, i18n } = useTranslation('home');
  const videoRefs = useRef([]); // To store video elements
  const playButtonRefs = useRef([]); // To store play button elements
  const language = i18n.language;

  // 🎬 Video Play/Pause Logic
  const videoPlay = (index) => {
    const currentVideo = videoRefs.current[index];
    const currentPlayButton = playButtonRefs.current[index];

    if (!currentVideo || !currentPlayButton) return; // Ensure elements exist

    if (currentVideo.paused) {
      currentVideo.play();
      currentPlayButton.classList.add('hidden');
    } else {
      currentVideo.pause();
      currentPlayButton.classList.remove('hidden');
    }

    // Pause all other videos
    videoRefs.current.forEach((video, idx) => {
      if (idx !== index && video) {
        video.pause();
        playButtonRefs.current[idx].classList.remove('hidden');
      }
    });
  };

  const whatYouGetData = t('whatyouget', { returnObjects: true });

  if (!Array.isArray(whatYouGetData) || whatYouGetData.length === 0)
    return null;

  const heading = whatYouGetData[0]?.Heading || '';
  const contentData = whatYouGetData.slice(1); // Remove the first object (Heading)

  const fontClass = language === 'fa' ? 'rubik' : 'inter';

  return (
    <section className={`whatyouget-container ${fontClass}`}>
      <Box className="whatyouget-containerMainText">
        <h1 className={`whatyouget-containerMainHeading ${fontClass}`}>
          {heading}
        </h1>
      </Box>
      <Box className="whatyouget-cards">
        {contentData.map((item, index) => (
          <div key={index} className={`whatyouget-card clr-white ${fontClass}`}>
            <div className="whatyouget-card-text">
              {item.title && <h2 className={fontClass}>{item.title}</h2>}
              {item.description && (
                <p className={fontClass}>{item.description}</p>
              )}
              {item.description2 && (
                <p className={fontClass}>{item.description2}</p>
              )}
            </div>
            <div className="whatyouget-card-imagecontainer">
              {/* 🎥 Video Element */}
              <iframe
                width="280"
                height="207"
                src="https://www.youtube.com/embed/WqWMdzkiVN8?si=TDOQOSeUMvpYstRX"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* ▶️ Play Button Overlay */}
              <img
                src={playbuttonimg}
                alt="Play button"
                className="whatyouget-playbutton"
                onClick={() => videoPlay(index)}
                ref={(el) => (playButtonRefs.current[index] = el)}
              />
            </div>
            {/* Placeholder for video/image */}
          </div>
        ))}
      </Box>
    </section>
  );
};

export default WhatYouGet;
