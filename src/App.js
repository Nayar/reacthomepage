import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import {Route, Link} from "react-router-dom"

function App() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </header>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
