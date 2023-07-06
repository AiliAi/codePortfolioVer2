import './about.scss';
import React from 'react';
import dataFetch from '../../hooks/DataFetch/DataFetch';
import AboutCard from '../AboutCard/AboutCard';

const About = () => {
  const url = '/data/about.json';
  const aboutData = dataFetch(url);

  return (
    <div className="about cards-container">
      {aboutData && aboutData?.data.length > 0
        ? aboutData?.data.map((about, index) => (
            <AboutCard key={about.title} about={about} index={index} />
          ))
        : 'No cards'}
    </div>
  );
};

export default About;
