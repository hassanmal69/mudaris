import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Slider from 'react-slick'; // Import React Slick
import './PriceCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Line from '@assets/icons/line.svg';
import { useTranslation } from 'react-i18next';

export const PriceCards = () => {
  const { t, i18n } = useTranslation('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1030);
  const language = i18n.language;
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1030);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const paymentPlans = t('paymentPlans', { returnObjects: true }); // Fetching translated JSON from i18next

  const handleSubscribe = () => {
    window.location.href = paymentPlans[1].paymentGateway;
  };

  // Slick Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    draggable: true,
    slidesToShow: 3, // Default for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, // Small screens
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 844, // Show 2 cards at 844px
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024, // Show 2 cards at 1024px
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
    ],
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
            <Card
              key={index}
              className={`plan-card ${language === 'fa' ? 'align-right' : 'align-left'}`}
            >
              <CardContent>
                <Box className="plan-header">
                  <Typography variant="h5" className="plan-heading">
                    {plan.title}
                  </Typography>
                  <Typography variant="h6" className="plan-price zain">
                    {plan.price}
                  </Typography>
                  <img src={Line} className="linePic" alt="line separator" />
                </Box>
                <div className="plan-body">
                  {plan.feature_desc && (
                    <Typography variant="body2" className="f-desc zain ">
                      {plan.feature_desc}
                    </Typography>
                  )}
                  <ul className="plan-perks">
                    {plan.features?.map((feature, i) => (
                      <li className="zain mobdescription" key={i}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <Box className="ButtonDiv">
                <Button className="subscribe-button">Pay Now</Button>
              </Box>
            </Card>
          ))}
        </Slider>
      ) : (
        <Box className="card-wrapper rev-flex">
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
                    <Typography variant="body2" className="f-desc zain ">
                      {plan.feature_desc}
                    </Typography>
                  )}
                  <ul className="plan-perks">
                    {plan.features?.map((feature, i) => (
                      <li key={i} className="zain">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <Box className="ButtonDiv">
                <Button className="subscribe-button" onClick={handleSubscribe}>
                  Pay Now
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      )}
    </section>
  );
};

export default PriceCards;
