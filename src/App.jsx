import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="app bg-black snap-mandatory snap-y  overflow-scroll z-0">
      <div className="h-screen snap-start">
      <Header />
      </div>
      <div id="about" className="h-screen snap-center">
        <About />
      </div>
      <div id="skills" className="h-screen snap-center">
        <Skills />
      </div>
      <div id="projects" className="h-screen snap-center">
        <Projects />
      </div>
      <div id="contact" className="h-screen snap-center">
        <Contact />
      </div>
    </div>
  );
}

export default App;
