// import { Link } from "react-router-dom";
import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import rails from './rails.png';
import photo from './myPhoto.jpg.jfif';

import './Home.css';

const Home = () => (
  <div className="home-page" id="home">
    <div className="home-wrapper">
      <h1>I am Polina Stamenova</h1>
      <div className="home-content">
        <h1 className="home-title">
          I am a
          {' '}
          <span className="change-text">Full-Stack-Developer.</span>
        </h1>
        <div className="rails-container">
          <img src={rails} className="rails-logo" alt="Rails-logo" />
          <h2 className="home-subtitle">
            I love
            {' '}
            <span className="change-text-color">Ruby on Rails</span>
            .
          </h2>
          <p className="home-text-content ">
            As a software engineer with a passion for coding, I create amazing
            websites and web apps to make the internet a better place. Get in
            touch to discuss how we can work together.
          </p>
        </div>
        <ul className="social-media-container">
          <li>
            <a
              className="social-links"
              href="https://www.linkedin.com/in/polina-stamenova-a60766112/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="social-media-icons social-links" />
            </a>
          </li>
          <li>
            <a
              className="social-links"
              href="https://github.com/PolinaStamenova"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="social-media-icons social-links" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <img src={photo} className="my-photo" alt="Personal" />
  </div>
);

export default Home;
