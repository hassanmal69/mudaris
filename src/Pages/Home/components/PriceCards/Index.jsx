import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Slider from 'react-slick'; // Import React Slick
import './PriceCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Line from '@assets/Icons/line.png';
import Tick from '@assets/Icons/tick.png';
import { useTranslation } from 'react-i18next';

export const PriceCards = () => {
  const { t, i18n } = useTranslation('home');
  const [isPaymentScreenVisible, setIsPaymentScreenVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const language = i18n.language;
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const paymentPlans = t('paymentPlans', { returnObjects: true }); // Fetching translated JSON from i18next

  const handleSubscribe = (plan, index) => {};

  // Slick Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="price-container">
      <Box className="text-container">
        <Typography variant="h1" className="plan-title rubik">
          {t('paymentHeading.title')}
        </Typography>
        <Typography variant="body1" className="plan-description zain">
          {t('paymentHeading.description')}
        </Typography>
      </Box>

      {/* Conditionally Render Grid or Slider */}
      {isMobile ? (
        <Slider {...sliderSettings}>
          {paymentPlans.map((plan, index) => (
            <div key={index}>
              <Card
                className={`plan-card ${language === 'persian' ? 'align-right' : 'align-left'}`}
              >
                <CardContent>
                  <Box className="plan-header">
                    <Typography variant="h5" className="plan-heading rubik">
                      {plan.title}
                    </Typography>
                    <Typography variant="h6" className="plan-price zain">
                      {plan.price}
                    </Typography>
                    <img src={Line} className="linePic" alt="line separator" />
                  </Box>
                  <div className="plan-body">
                    {plan.feature_desc && (
                      <Typography
                        variant="body2"
                        className="f-desc zain clr-white"
                      >
                        {plan.feature_desc}
                      </Typography>
                    )}
                    <ul className="plan-perks">
                      {plan.features?.map((feature, i) => (
                        <Box className="perk feature-list inter">
                          <img src={Tick} alt="Tick Icon" />
                          <li>{feature}</li>
                        </Box>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <Box className="ButtonDiv">
                  <Button className="subscribe-button">Pay Now</Button>
                </Box>
              </Card>
            </div>
          ))}
        </Slider>
      ) : (
        <Box className="card-wrapper">
          {paymentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`plan-card ${language === 'fa' ? 'align-right' : 'align-left'}`}
            >
              <CardContent>
                <Box className="plan-header">
                  <Typography variant="h5" className="plan-heading rubik">
                    {plan.title}
                  </Typography>
                  <Typography variant="h6" className="plan-price zain">
                    {plan.price}
                  </Typography>
                  <img src={Line} className="linePic" alt="line separator" />
                </Box>
                <div className="plan-body">
                  {plan.feature_desc && (
                    <Typography
                      variant="body2"
                      className="f-desc zain clr-white"
                    >
                      {plan.feature_desc}
                    </Typography>
                  )}
                  <ul className="plan-perks">
                    {plan.features?.map((feature, i) => (
                      <Box className="perk zain">
                        <li>{feature}</li>
                      </Box>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <Box className="ButtonDiv">
                <Button className="subscribe-button">Pay Now</Button>
              </Box>
            </Card>
          ))}
        </Box>
      )}
    </section>
  );
};

export default PriceCards;
