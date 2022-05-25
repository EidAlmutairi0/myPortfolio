import Experience from "./components/experience/experience";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import DarkModeContext from "./components/DarkModeContext";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <body>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div>
          <Intro />
          <Projects />
          <Experience />
        </div>
      </DarkModeContext.Provider>
    </body>
  );
}

export default App;
