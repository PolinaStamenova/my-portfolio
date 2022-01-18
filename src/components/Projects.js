import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { DiPostgresql } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import recipe from "./recipe.JPG";

const Projects = () => {
  return (
    <div id='projects'>
      <div className='buffer'></div>
      <div className='projects-container'>
        <h1 className='projects-title'>
          My <span className='change-text-color'>Projects</span>
        </h1>
        <ul className='projects-ul-container'>
          <li className='project-list'>
            <img src={recipe} className='project-img'></img>
            <div className='project-content'>
              <div className='project-build-funct'>
                <div className='buld-witth-holder'>
                  <p className='build-with'>Build with:</p>
                  <ul className='listed-items'>
                    <li className='build-icons'>
                      <DiRuby />
                      <p>Ruby</p>
                    </li>
                    <li className='build-icons'>
                      <SiRubyonrails />
                      <p>Ruby on Rails</p>
                    </li>
                    <li className='build-icons'>
                      <DiPostgresql />
                      <p>PostgreSQL</p>
                    </li>
                    <li className='build-icons'>
                      <DiCss3 />
                      <p>CSS</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='functionality'>Functionality:</p>
                  <ul className='listed-items circle'>
                    <li>Add recipe to your list</li>
                    <li>Make them public</li>
                    <li>Edit and delete recipe</li>
                    <li>Check list of all public recipes</li>
                    <li>Generate a shopping list</li>
                  </ul>
                </div>
              </div>
              <ul className='project-social'>
                <li>
                  <div className='github'>
                    <p className='change-text-color'>GitHub:</p>
                    <a
                      className='social-links'
                      href='https://github.com/PolinaStamenova/recipe-app'
                      target='_blank'
                    >
                      <AiFillGithub className='social-media-icons social-links' />
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className='social-links'
                    href='https://whispering-dusk-07468.herokuapp.com/users/sign_in'
                    target='_blank'
                  >
                    Live Demo
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className='project-list'>
            <div className='project-content'>
              <p className='build-with'>Build with:</p>
              <ul className='listed-items'>
                <li className='build-icons'>
                  <DiRuby />
                  <p>Ruby</p>
                </li>
              </ul>
              <p className='functionality'>Functionality:</p>
              <ul className='listed-items circle'>
                <li>Add recipe to your list</li>
                <li>Make them public</li>
                <li>Edit and delete recipe</li>
                <li>Check list of all public recipes</li>
                <li>Generate a shopping list</li>
              </ul>
              <ul className='project-social'>
                <li>
                  <div className='github'>
                    <p className='change-text-color'>GitHub:</p>
                    <a
                      className='social-links'
                      href='https://github.com/PolinaStamenova/recipe-app'
                      target='_blank'
                    >
                      <AiFillGithub className='social-media-icons social-links' />
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className='social-links'
                    href='https://whispering-dusk-07468.herokuapp.com/users/sign_in'
                    target='_blank'
                  >
                    Live Demo
                  </a>
                </li>
              </ul>
            </div>
            <img src={recipe} className='project-img'></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
