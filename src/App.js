// App.js
import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills"; // Import the Skills component
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills id="skills"/> {/* Include the Skills component */}
      <Contact />
    </div>
  );
}

export default App;
