import React from 'react';

import './About.css';

const About = () => (
  <div className="home-page" id="about">
    <div className="home-wrapper">
      <div className="buffer-about" />
      <h1>
        About
        {' '}
        <spna className="change-text-color">me.</spna>
      </h1>
      <div className="about-content">
        <p className="about-text-content">
          Software developer, Rails enthusiast. Stack: JavaScript, Ruby,
          Rails, React, Redux. I like latino dances, playing on piano, diving,
          photography and traveling. I love coding challnages and logical
          tasks.
        </p>
      </div>
    </div>
  </div>
);

export default About;
