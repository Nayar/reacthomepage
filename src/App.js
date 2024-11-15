import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import {Route, Link, Routes} from "react-router-dom"
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState('white')

  return (
    <div style={{backgroundColor: bgColor}}>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/project/react">Project: React</Link></li>
          <li><Link to="/project/javascript">Project: Javascript</Link></li>
          <li><Link to="/project/python">Project: Python</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about/music">About music</Link></li>
          <li><Link to="/about/swimming">About swiming</Link></li>
          <li><Link to="/h1">h1</Link></li>
        </ul>
      </header>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/project/:name" element={<Projects/>}/>
        <Route exact path="/about/music" element={<About hobby="Music" changecolor={setBgColor}/>}/>
        <Route exact path="/about/swimming" element={<About hobby="Swimming" changecolor={setBgColor}/>}/>
        <Route exact path="/h1" element={<h1>Hello</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
