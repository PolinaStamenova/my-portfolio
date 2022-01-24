import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='App'>
      <div>
        <div className='border'>
          <Nav />
          <Home />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
