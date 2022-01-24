import './Nav.css';

const Nav = () => (
  <nav>
    <ul className="nav-panel-container">
      <li className="nav-list white-text">
        <a href="#home">Home</a>
      </li>
      <li className="nav-list white-text">
        <a href="#projects">Projects</a>
      </li>
      <li className="nav-list white-text">
        <a href="#about">About</a>
      </li>
      <li className="nav-list white-text">
        <a href="#contact">Contact me</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
