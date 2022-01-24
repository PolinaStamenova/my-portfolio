import './Projects.css';
import { AiFillGithub } from 'react-icons/ai';
import {
  DiPostgresql, DiRuby, DiCss3, DiSass,
} from 'react-icons/di';
import { SiRubyonrails } from 'react-icons/si';

import recipe from './recipe.JPG';
import moneytrack from './moneytrack.JPG';
import blog from './blog.JPG';

const Projects = () => (
  <div id="projects">
    <div className="buffer" />
    <div className="projects-container">
      <h1 className="projects-title">
        My
        {' '}
        <span className="change-text-color">Projects</span>
      </h1>
      <ul className="projects-ul-container">
        <li className="project-list">
          <img src={recipe} className="project-img" alt="Project" />
          <div className="project-content">
            <div className="project-build-funct">
              <div className="buld-witth-holder">
                <p className="build-with">Build with:</p>
                <ul className="listed-items">
                  <li className="build-icons">
                    <DiRuby />
                    <p>Ruby</p>
                  </li>
                  <li className="build-icons">
                    <SiRubyonrails />
                    <p>Ruby on Rails</p>
                  </li>
                  <li className="build-icons">
                    <DiPostgresql />
                    <p>PostgreSQL</p>
                  </li>
                  <li className="build-icons">
                    <DiCss3 />
                    <p>CSS</p>
                  </li>
                </ul>
              </div>
              <div>
                <p className="functionality">Functionality:</p>
                <ul className="listed-items circle">
                  <li>Add recipe to your list</li>
                  <li>Make them public</li>
                  <li>Edit and delete recipe</li>
                  <li>Check list of all public recipes</li>
                  <li>Generate a shopping list</li>
                </ul>
              </div>
            </div>
            <ul className="project-social">
              <li>
                <div className="github">
                  <p className="change-text-color">GitHub:</p>
                  <a
                    className="social-links"
                    href="https://github.com/PolinaStamenova/recipe-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="social-media-icons social-links" />
                  </a>
                </div>
              </li>
              <li>
                <a
                  className="social-links"
                  href="https://whispering-dusk-07468.herokuapp.com/users/sign_in"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="project-list">
          <div className="project-content">
            <p className="build-with">Build with:</p>
            <ul className="listed-items">
              <li className="build-icons">
                <DiRuby />
                <p>Ruby</p>
              </li>
              <li className="build-icons">
                <SiRubyonrails />
                <p>Ruby on Rails</p>
              </li>
              <li className="build-icons">
                <DiPostgresql />
                <p>PostgreSQL</p>
              </li>
              <li className="build-icons">
                <DiCss3 />
                <p>CSS</p>
              </li>
              <li className="build-icons">
                <DiSass />
                <p>SASS</p>
              </li>
            </ul>
            <p className="functionality">Functionality:</p>
            <ul className="listed-items circle">
              <li>Mobile version</li>
              <li>Create a new MoneyTrack</li>
              <li>Tack your spent money</li>
            </ul>
            <ul className="project-social">
              <li>
                <div className="github">
                  <p className="change-text-color">GitHub:</p>
                  <a
                    className="social-links"
                    href="https://github.com/PolinaStamenova/moneytrack"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="social-media-icons social-links" />
                  </a>
                </div>
              </li>
              <li>
                <a
                  className="social-links"
                  href="https://murmuring-river-52663.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
            </ul>
          </div>
          <img src={moneytrack} className="project-img" alt="Project" />
        </li>
        <li className="project-list">
          <img src={blog} className="project-img" alt="Project" />
          <div className="project-content">
            <p className="build-with">Build with:</p>
            <ul className="listed-items">
              <li className="build-icons">
                <DiRuby />
                <p>Ruby</p>
              </li>
              <li className="build-icons">
                <SiRubyonrails />
                <p>Ruby on Rails</p>
              </li>
              <li className="build-icons">
                <DiPostgresql />
                <p>PostgreSQL</p>
              </li>
              <li className="build-icons">
                <DiCss3 />
                <p>CSS</p>
              </li>
            </ul>
            <p className="functionality">Functionality:</p>
            <ul className="listed-items circle">
              <li>Depending of the role</li>
              <li>Add postst</li>
              <li>Delete postst</li>
              <li>Delete comments</li>
              <li>Add comments to postst</li>
              <li>Like postst</li>
            </ul>
            <ul className="project-social">
              <li>
                <div className="github">
                  <p className="change-text-color">GitHub:</p>
                  <a
                    className="social-links"
                    href="https://github.com/PolinaStamenova/blog-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="social-media-icons social-links" />
                  </a>
                </div>
              </li>
              <li>
                <a
                  className="social-links"
                  href="https://pure-retreat-86553.herokuapp.com/users/sign_in"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Projects;
