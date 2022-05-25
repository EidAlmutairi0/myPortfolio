import React from "react";
import "./projects.css";
import Athar from "../../imges/Athar.png";
import Takyeem from "../../imges/Takyeem.png";
import Maaradh from "../../imges/Maaradh.png";
import Thaqafah from "../../imges/Thaqafah.png";
import Project from "./project/project";
import DarkModeContext from "../DarkModeContext";
import { useContext } from "react";

const Projects = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <body>
      {" "}
      <div className={`p ${darkMode ? "p-dark-mode" : "p-light-mode"}`}>
        <h2 className="p-title">Projects</h2>
        <div className="p-gre"></div>
        <div className="p-cards-wrapper">
          <div className="p-cards-grid ">
            <Project image={Athar} name="Athar">
              Athar is a mobile application that allows users to browse the
              archaeological places. It solves the issue of searching about
              places to visit, brings all sites in one place. Developed using
              Flutter and Firebase.
            </Project>
            <Project image={Takyeem} name="Takyeem">
              Takyeem is a mobile application that allows students to rate their
              lecturers to give the other students an impression about the
              lecturer. Developed using Flutter and Firebase.
            </Project>
            <Project image={Maaradh} name="Maaradh">
              Maaradh is a mobile application that allow users to browse car
              dealers in their city, brings all needed details of the cars and
              safes their time. Developed using Flutter, React.js, Node.js and
              MongoDB.
            </Project>
            <Project image={Thaqafah} name="Thaqafah">
              Thaqafah is a mobile application that allows users to create
              quizzes and publish it for other users to take. Developed using
              Flutter and Firebase.
            </Project>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Projects;
