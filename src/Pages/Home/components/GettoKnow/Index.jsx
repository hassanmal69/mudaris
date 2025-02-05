import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./get.css";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Drimg from "../../../../assets/Images/Drimg.png";
import sciencespo from "../../../../assets/Images/sciencespo.png";
import tolonews from "../../../../assets/Images/tolonews.png";
import tv from "../../../../assets/Images/tv.png";
import mudaris from "../../../../assets/Images/mudaris.png";
import undplogo from "../../../../assets/Images/undplogo.png";
import onelogo from "../../../../assets/Images/onelogo.png";

const logos = [sciencespo, tolonews, tv, mudaris, undplogo, onelogo];

const GettoKnow = () => {
  const { language, data } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)"); // Detect mobile screen

  if (!data) return <div>Data is loading...</div>;
  const getData = data.gettoknow;
  const fontClass = language === "persian" ? "rubik" : "inter";

  // Slider settings for mobile
  const sliderSettings = {
    dots: false, // Hide dots for a cleaner UI
    infinite: true, // Loop the slider infinitely
    arrows: false, // No navigation arrows
    speed: 2000, // Adjust smoothness (higher = slower)
    slidesToShow: 1.5, // Display 2 slides at a time
    slidesToScroll: 1, // Move one slide at a time
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 0, // Continuous movement
    cssEase: "linear", // Ensures smooth movement
    pauseOnHover: false, // Keep moving even when hovered
  };
  

  return (
    <section className="GetToknowMainSection">
      <Box className="GetToknowMainContainer">
        <Box className="GetToknowContent">
          <img src={Drimg} alt="Drimg" />

          <Box className={`GetToknowTextContent ${fontClass}`}>
            <h2 className={fontClass}>{getData.headtitle}</h2>
            <Box className="paraDivGettoKnow">
              <p className={fontClass}>{getData.headdescription}</p>
              <p className={fontClass}>{getData.headdescription2}</p>
            </Box>
            <Button className={`dm-sans ${fontClass}`} onClick={() => navigate("/AboutOwner")}>
              {getData.buttonlabel}
            </Button>
          </Box>
        </Box>

        <Box className="GetToknowContentbelowContainer">
          <Box className={`GetToknowTextContentbelow ${fontClass}`}>
            <Box className="GetToknowTextContentbelowMainText">
              <h4 className={fontClass}>{getData.transformtitle}</h4>
              <p className={fontClass}>{getData.transformdescription}</p>
              <p className={fontClass}>{getData.featuredline}</p>
            </Box>
          </Box>
          </Box>
          </Box>
          {/* Mobile: Show slider */}
          {isMobile ? (
            <Box className="mobile-slider">
              <Slider {...sliderSettings}>
                {logos.map((logo, key) => (
                  <Box key={key} className="GetToknowContentbelowLogo">
                    <img src={logo} alt={`Company logo ${key}`} />
                  </Box>
                ))}
              </Slider>
            </Box>
          ) : (
            /* Desktop: Show normal grid layout */
            <Box className="GetToknowContentbelowLogoBox">
              {logos.map((logo, key) => (
                <Box key={key} className="GetToknowContentbelowLogo">
                  <img src={logo} alt={`Company logo ${key}`} />
                </Box>
              ))}
            </Box>
          )}
    </section>
  );
};

export default GettoKnow;
