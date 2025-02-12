import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/index.jsx';
import Footer from '../layout/footer/index.jsx';
import ResponsiveAppBar from '../layout/navBar/Index.jsx';
import NotFound404 from '../Pages/NotFound';
import { useLocation } from 'react-router-dom';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithNavbarAndFooter element={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// Wrapper for Navbar and Footer
const WithNavbarAndFooter = ({ element }) => {
  const location = useLocation();
  const shouldRenderNavbarAndFooter = location.pathname !== '/profile'; // Adjust the path
  return shouldRenderNavbarAndFooter ? (
    <>
      <ResponsiveAppBar />
      {element}
      <Footer />
    </>
  ) : (
    element
  );
};
