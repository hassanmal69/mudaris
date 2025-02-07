import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './LineCard.css';

import LineImg from '../../../../assets/Images/linewo.png';
import Symbol from '../../../../../public/assets/Icons/Symbol.png';
import Symbol1 from '../../../../../public/assets/Icons/Symbol (1).png';
import Symbol2 from '../../../../../public/assets/Icons/Symbol (2).png';
import Symbol3 from '../../../../../public/assets/Icons/Symbol (3).png';
import Symbol4 from '../../../../../public/assets/Icons/moneyicon.png';
import Symbol5 from '../../../../../public/assets/Icons/currciculumicon.png';
import Symbol6 from '../../../../../public/assets/Icons/networkbrighticon.png';
import Symbol7 from '../../../../../public/assets/Icons/unilevelicon.png';
import Community from '../Community';

const LineCards = () => {
  const { t, i18n } = useTranslation('home');
  const parentArray = t('parentarray', { returnObjects: true });
  const language = i18n.language;
  const symbolArray = [
    Symbol,
    Symbol1,
    Symbol2,
    Symbol3,
    Symbol4,
    Symbol5,
    Symbol6,
    Symbol7,
  ];

  return (
    <>
      {parentArray.map((section, sectionIndex) => {
        const sectionKey = Object.keys(section)[0];
        const sectionItems = section[sectionKey];

        return (
          <Box key={sectionIndex} className="importanttoread">
            <Typography
              variant="h1"
              className="LineCardContainerMainTitle rubik"
            >
              {sectionItems[0]?.title}
            </Typography>
            <Box className="LineCardContainerMain">
              <Box className="LineCardContainerMainPic">
                <img
                  src={LineImg}
                  className="importanttoreadLinePic"
                  alt="Line"
                />
                <Box className="importanttoreadCardnumberDivParent">
                  {sectionItems.slice(1).map((item, index) => (
                    <Box
                      key={index}
                      className={`importanttoreadCardnumberDiv ${
                        sectionKey === 'participate'
                          ? 'specialClassForSecondComponent'
                          : ''
                      }`}
                    >
                      <Typography
                        variant="h6"
                        className="importanttoreadCardnumber rubik"
                      >
                        {/* {item.numbers} */}
                        {index+1}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box className="importanttoreadcardContainer">
                {sectionItems.slice(1).map((item, index) => (
                  <Box className="uaatest" key={index}>
                    <Box className="importanttoreadCard">
                      <Box className="importanttoreadCardPicDiv">
                        <img
                          src={symbolArray[index % symbolArray.length]}
                          alt={`Symbol ${index}`}
                        />
                      </Box>
                      <Box className="importanttoreadCardContentText">
                        <Typography
                          variant="h6"
                          className="importanttoreadCardtitle rubik"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="importanttoreadCarddescription rubik"
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default LineCards;
