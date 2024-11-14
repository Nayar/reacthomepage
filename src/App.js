import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <header>
        <ul>
          <li>Home</li>
          <li>Project</li>
          <li>About</li>
        </ul>
      </header>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
