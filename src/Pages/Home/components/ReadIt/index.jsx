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

const LineCards = () => {
  const { t } = useTranslation('home');
  const data = t('parentarray', { returnObjects: true }); // Get JSON data as an object

  if (!data || !Array.isArray(data))
    return <Typography>Data not available</Typography>;

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
      {data.map((section, sectionIndex) => {
        const sectionKey = Object.keys(section)[0]; // Extract key (e.g., "Important" or "participate")
        const sectionItems = section[sectionKey];

        return (
          <Box key={sectionIndex} className="importanttoread">
            <Typography variant="h1" className="LineCardContainerMainTitle">
              {sectionItems[0]?.title}
            </Typography>

            {/* <Box className="LineCardContainerMainTitleDesc">
              {sectionItems.slice(1).map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant="h1"
                    className="LineCardContainerMainTitle"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="LineCardContainerMainDesc"
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box> */}

            <Box className="LineCardContainerMain">
              <Box className="LineCardContainerMainPic">
                <img
                  src={LineImg}
                  className="importanttoreadLinePic"
                  alt="Line"
                />
              </Box>

              {/* Cards with Symbols */}
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
                          className="importanttoreadCardtitle"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="importanttoreadCarddescription"
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
