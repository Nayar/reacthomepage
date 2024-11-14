import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import {Route, Link, Routes} from "react-router-dom"

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
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project" element={<Projects/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
