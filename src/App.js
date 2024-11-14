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
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/project/react">Project: React</Link></li>
          <li><Link to="/project/javascript">Project: Javascript</Link></li>
          <li><Link to="/project/python">Project: Python</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/h1">h1</Link></li>
        </ul>
      </header>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project/:name" element={<Projects/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/h1" element={<h1>Hello</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
