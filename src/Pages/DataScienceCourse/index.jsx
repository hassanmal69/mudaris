import React from 'react';
import { DataScience } from './components/index';
import FAQ from '../home/components/Accordion';
import GetStart from '../home/components/GetStarted';

export const DataSciCourse = () => {
  return (
    <>
      <section className="home-page column primary-bg">
        <DataScience />
        <FAQ />
        <GetStart />
      </section>
    </>
  );
};
