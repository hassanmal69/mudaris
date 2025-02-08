import { Button } from '@mui/material';
import React from 'react';
import './getstartedButton.css';
export const GetStartedButton = ({ onButtonClick }) => {
  return (
    <div className="GetStartedButtonDiv">
      <Button className="GetStartedButton" onClick={onButtonClick}>
      به جمع میلیونر‌های جوان بپیوندید
      </Button>
    </div>
  );
};
