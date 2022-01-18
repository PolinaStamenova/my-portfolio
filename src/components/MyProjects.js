import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { DiPostgresql } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import recipe from "./recipe.JPG";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <div className='my-projects' id='projects'>
      <div className='buffer'></div>
      <h1 className='projects-title'>
        My <span className='change-text-color'>Projects</span>
      </h1>
      <ul className='my-projects-ul'>
        <li className='my-projects-list'>
          <div className='my-projects-div'>
            <h4 className='my-projects-title'>My Recipe app</h4>
            <img
              src={recipe}
              alt='Recipe project image'
              className='my-project-image'
            ></img>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyProjects;
