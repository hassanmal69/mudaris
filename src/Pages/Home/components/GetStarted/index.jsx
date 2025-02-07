import * as React from 'react';
import Box from '@mui/material/Box';
import './getstarted.css';
import { Container } from '@mui/material';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

function GetStart() {
  let language = 'persian';
  const fontClass = 'persian' === 'persian' ? 'rubik' : 'inter';
  const { t } = useTranslation('home');
  return (
    <Container className="get-start-container">
      {/* Displaying the title */}
      <h1 className={`clr-white get-start-heading ${fontClass}`}>
        {t('GetStarted.title1')}
        {t('GetStarted.title2')}
      </h1>

      {/* Input field with placeholder */}
      <Box className="get-email-field">
        <TextField
          type="email"
          placeholder={t('GetStarted.inputfield')}
          variant="outlined"
          className={`custom-input ${fontClass}`}
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFFFFF26', // Outline color
              },
              '&:hover fieldset': {
                borderColor: '#FFFFFF26', // Outline color on hover
              },
              '& .MuiInputBase-input': {
                color: '#FFF', // Text color
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFFFFF26', // Outline color when focused
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#fff', // Placeholder color
            },
          }}
        />

        <button
          className={` button-text ${fontClass} ${language === 'persian' ? 'my-with' : 'get-start-button'}`}
        >
          {t('GetStarted.buttontext')}
        </button>
      </Box>
    </Container>
  );
}

export default GetStart;
