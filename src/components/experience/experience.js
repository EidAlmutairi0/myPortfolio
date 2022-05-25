import SDAIA from "../../imges/sdaia.png";
import KSU from "../../imges/ksu.png";
import DarkModeContext from "../DarkModeContext";
import { useContext } from "react";

import "./experience.css";

const Experience = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <footer>
      {" "}
      <div className={`e ${darkMode ? "e-dark-mode" : "e-light-mode"}`}>
        <div className="e-wraper">
          <div className="e-title">
            <h2>Education & Experience</h2>
          </div>
          <div className="e-table-wrapper">
            <table className="edu-grid">
              <tbody>
                <tr>
                  <td>
                    <img src={KSU}></img>
                  </td>
                  <td>
                    <p className="e-dec"> - Software Engineering</p>
                    <p className="e-dec"> 2017 - 2022</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={SDAIA}></img>
                  </td>

                  <td>
                    <p className="e-dec"> - CO-OP Trainee</p>
                    <p className="e-dec"> 01/2022 - 03/2022</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Experience;
