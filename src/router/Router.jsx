import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from '../Pages/Home';
import Footer from '../layout/Footer';
import ResponsiveAppBar from '../layout/NavBar/Index';
import NotFound404 from '../Pages/NotFound';
import { useLocation } from 'react-router-dom';
import { DataSciCourse } from '../Pages/DataScienceCourse';
import { AboutOwner } from '../Pages/AboutOwner';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithNavbarAndFooter element={<Home />} />} />
        <Route
          path="/datascience"
          element={<WithNavbarAndFooter element={<DataSciCourse />} />}
        />
        <Route
          path="/AboutOwner"
          element={<WithNavbarAndFooter element={<AboutOwner />} />}
        />

        <Route path="*" element={<NotFound404 />} />
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
