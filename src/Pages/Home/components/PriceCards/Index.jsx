import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Slider from 'react-slick'; // Import React Slick
import { useLanguage } from '../../../../globalContext/GlobalProvider';
import './PriceCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Line from '../../../../assets/Icons/line.png';
import Tick from '../../../../assets/Icons/tick.png';
import PaymentScreen from './PaymentScreen';
import { useTranslation } from 'react-i18next';

export const PriceCards = () => {
  const { data } = useLanguage();
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

  if (isPaymentScreenVisible) {
    return <PaymentScreen selectedPlan={selectedPlan} />;
  }
  if (!data) return 'no data in price cards';

  const paymentPlans = data.paymentPlans;
  const handleSubscribe = (plan, index) => {
    setIsPaymentScreenVisible(true);
    setSelectedPlan({
      planTitle: plan[`plan${index + 1}`],
      price: plan.price,
      para: plan.para,
      perks: [
        plan.perk1,
        plan.perk2,
        plan.perk3,
        plan.perk4,
        plan.perk5,
        plan.perk6,
      ].filter(Boolean),
    });
  };

  // Slick Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const fontClass = language === 'fa' ? 'rubik' : 'inter';
  return (
    <section className="price-container">
      <Box className="text-container">
        <Typography variant="h1" className={`plan-title ${fontClass}`}>
          {t('paymentHeader.title')}
        </Typography>
        <Typography
          variant="body1"
          className={`plan-description ${language === 'fa' ? 'zain' : 'inter'}`}
        >
          {t('paymentHeader.description')}
        </Typography>
      </Box>

      {/* Conditionally Render Grid or Slider */}
      {isMobile ? (
        <Slider {...sliderSettings}>
          {paymentPlans.slice(1, 5).map((plan, index) => (
            <div key={index}>
              <Card
                className={`plan-card ${language === 'persian' ? 'align-right' : 'align-left'}`}
              >
                <CardContent>
                  <Box className="plan-upper">
                    <Typography variant="h5" className="plan-heading inter">
                      {plan[`plan${index + 1}`]}
                    </Typography>
                    <Typography variant="h6" className="plan-price inter">
                      {plan.price}
                    </Typography>
                    <img src={Line} className="linePic" alt="line separator" />
                  </Box>
                  {plan.para && (
                    <Typography variant="body2" className="plan-para inter">
                      {plan.para}
                    </Typography>
                  )}
                  <ul className="plan-perks">
                    {[
                      plan.perk1,
                      plan.perk2,
                      plan.perk3,
                      plan.perk4,
                      plan.perk5,
                      plan.perk6,
                    ]
                      .filter(Boolean)
                      .map((perk, perkIndex) => (
                        <Box className="perk flex inter" key={perkIndex}>
                          <img src={Tick} alt="Tick Icon" />
                          <li>{perk}</li>
                        </Box>
                      ))}
                  </ul>
                </CardContent>
                <Box className="ButtonDiv">
                  <Button
                    className="subscribe-button"
                    onClick={() => handleSubscribe(plan, index)}
                  >
                    {paymentPlans[5].subscribe}
                  </Button>
                </Box>
              </Card>
            </div>
          ))}
        </Slider>
      ) : (
        <Box className="card-wrapper">
          {paymentPlans.slice(1, 5).map((plan, index) => (
            <Card
              key={index}
              className={`plan-card ${language === 'persian' ? 'align-right' : 'align-left'}`}
            >
              <CardContent>
                <Box className="plan-upper">
                  <Typography variant="h5" className="plan-heading inter">
                    {plan[`plan${index + 1}`]}
                  </Typography>
                  <Typography variant="h6" className="plan-price inter">
                    {plan.price}
                  </Typography>
                  <img src={Line} className="linePic" alt="line separator" />
                </Box>
                {plan.para && (
                  <Typography variant="body2" className="plan-para inter">
                    {plan.para}
                  </Typography>
                )}
                <ul className="plan-perks">
                  {[
                    plan.perk1,
                    plan.perk2,
                    plan.perk3,
                    plan.perk4,
                    plan.perk5,
                    plan.perk6,
                  ]
                    .filter(Boolean)
                    .map((perk, perkIndex) => (
                      <Box className="perk flex inter" key={perkIndex}>
                        <img src={Tick} alt="Tick Icon" />
                        <li>{perk}</li>
                      </Box>
                    ))}
                </ul>
              </CardContent>
              <Box className="ButtonDiv">
                <Button
                  className="subscribe-button"
                  onClick={() => handleSubscribe(plan, index)}
                >
                  {paymentPlans[5].subscribe}
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
