import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './footer.css';
import FaceBook from '@assets/Icons/FaceBook.svg';
import Instagram from '@assets/Icons/Instagram.svg';
import LinkedIn from '@assets/Icons/LinkedIn.svg';
import Youtube from '@assets/Icons/Lozenge.svg';
import Twitter from '@assets/Icons/Twitter.svg';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  let language = '';

  const fontClass = language === 'persian' ? 'rubik' : 'monts';
  const { t } = useTranslation('home');
  return (
    <footer className="footer-bg align-center">
      <div className="footer-section row">
        <Box component="div" className="footer-left-section column">
          <Box component="div" className="footer-content-wrapper">
            <Typography
              variant="h6"
              className={`clr-white footer-h2 ${fontClass}`}
            >
              Mudaris Academy
            </Typography>
            <Typography
              variant="body1"
              className={`secondary-font-clr footer-p ${fontClass}`}
            >
              {t('footerDescription')}
            </Typography>
          </Box>
          {/* <Button
      variant="outlined"
      className="footer-btn clr-white inter"
      onClick={toggleLanguage}
    >
      <span>
        <LanguageIcon />
      </span>
      {data.togglebutton}
      <span>
        <ArrowForwardIosIcon className="footer-arrow-icon" />
      </span>
    </Button> */}
        </Box>

        <Box component="div" className="flex footer-right-section">
          {Array.isArray(t('footerContent', { returnObjects: true })) &&
            t('footerContent', { returnObjects: true }).map(
              (content, index) => (
                <Box component="div" key={index} className="sublinks-wrapper">
                  <ul>
                    <li className="white-normal">{content}</li>
                  </ul>
                </Box>
              )
            )}
        </Box>
      </div>
      <Divider />
      <div className="copy-write space-between flex-center">
        {/* <div className="footer-icons flex">
          <img src={Instagram} alt="Instagram" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Twitter} alt="Twitter" />
          <img src={FaceBook} alt="Facebook" />
          <img src={Youtube} alt="YouTube" />
        </div> */}
        <div className="footer-icons flex">
          <a
            href="https://www.instagram.com/mudarisacademy?igsh=MTRxeGpmYnAzMjNqaQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/share/19vLPZX6B3/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FaceBook} alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/@DrEnayat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="YouTube" />
          </a>
          <a
            href="https://www.tiktok.com/@mudarisacademy?_t=ZS-8th1CBeXypc&_r=1" // need to check
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="TikTok" />
          </a>
        </div>

        <Typography
          variant="body1"
          className={`secondary-font-clr footer-p ${fontClass}`}
        >
          © 2025 Mudaris Academy, Inc. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
