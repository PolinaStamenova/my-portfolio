import './Projects.css';
import recipe from './recipe.JPG';
import './MyProjects.css';

const MyProjects = () => (
  <div className="my-projects" id="projects">
    <div className="buffer" />
    <h1 className="projects-title">
      My
      {' '}
      <span className="change-text-color">Projects</span>
    </h1>
    <ul className="my-projects-ul">
      <li className="my-projects-list">
        <div className="my-projects-div">
          <h4 className="my-projects-title">My Recipe app</h4>
          <img src={recipe} alt="Recipe project" className="my-project-image" />
        </div>
      </li>
    </ul>
  </div>
);

export default MyProjects;
