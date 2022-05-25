import "./project.css";
import { useContext } from "react";
import DarkModeContext from "../../DarkModeContext";

const Project = (props) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`p-card ${
        darkMode ? "p-card-dark-mode" : "p-card-light-mode"
      }`}
    >
      <div className="gre"></div>
      <div className="p-content">
        <div className="p-card-top">
          <img src={props.image} className="p-card-top-appLogo" alt=""></img>
        </div>
        <p className="p-card-bottom-appDesc">{props.children}</p>
      </div>
    </div>
  );
};

export default Project;
