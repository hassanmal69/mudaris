import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from '../../assets/Icons/Nav/Frame 1.png';
import './nav.css';
import { useTranslation } from 'react-i18next';

function ResponsiveAppBar() {
  const { t, i18n } = useTranslation('home');
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentForm, setCurrentForm] = useState('SignIn');

  const pages = t('pagesnav');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClickOpen = (formType) => {
    setCurrentForm(formType);
    if (formType === 'SignIn') {
      setOpenLogin(true);
      setOpenSignUp(false);
    } else {
      setOpenLogin(false);
      setOpenSignUp(true);
    }
  };

  const handleToggleDialogs = () => {
    if (currentForm === 'SignIn') {
      setCurrentForm('Signup');
      setOpenLogin(false);
      setOpenSignUp(true);
    } else if (currentForm === 'Signup') {
      setCurrentForm('SignIn');
      setOpenLogin(true);
      setOpenSignUp(false);
    }
  };

  const handleClose = () => {
    setOpenLogin(false);
    setOpenSignUp(false);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  let language = 'persian';

  const fontClass = language === 'persian' ? 'rubik' : 'inter';

  return (
    <AppBar
      position="static"
      className="Navbar"
      sx={{ background: 'transparent' }}
    >
      <Container
        maxWidth="xl"
        sx={{ borderBottom: '1px solid #aaa', background: 'transparent' }}
      >
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a">
            <img src={Logo} alt="LOGO" />
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            >
              {t('pagesnav', { returnObjects: true }).map((page, i) => (
                <Button
                  key={i}
                  onClick={handleCloseNavMenu}
                  className="nav-menu-btn"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div className="Btns">
              <div className="btnContainer">
                {t('pagesnav', { returnObjects: true }).map((page, i) => (
                  <Button
                    key={i}
                    onClick={handleCloseNavMenu}
                    className="nav-menu-btn"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </div>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
