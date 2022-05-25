import "./intro.css";
import Me from "../../imges/myPhoto.png";
import github from "../../imges/github.png";
import email from "../../imges/email.png";
import linkedin from "../../imges/linkedin.png";
import githubLight from "../../imges/github-light.png";
import emailLight from "../../imges/email-light.png";
import linkedinLight from "../../imges/linkedin-light.png";

import DarkModeContext from "../DarkModeContext";
import DarkModeSwitch from "../DarkMode";
import { useContext } from "react";

const Intro = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <header>
      {" "}
      <div className={`i ${darkMode ? "i-dark-mode" : "i-light-mode"}`}>
        <div className="i-wrapper">
          <DarkModeSwitch />

          <div className="i-left">
            <div className="i-left-wrapper">
              <h1 className="i-intro">Hey</h1>
              <div className=".i-name-wrapper">
                <h1 className="i-pronoun">I am</h1>
                <h1 className="i-name"> Eid Almutairi</h1>
              </div>
              <h1 className="i-desc">
                Full Stack and Mobile Application Developer Based on Riyadh
              </h1>
              {!darkMode && (
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/eidalmutairi0/">
                      <img src={linkedin} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/EidAlmutairi0">
                      <img src={github} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto: eidalmutairi0@gmail.com">
                      <img src={email} alt="" />
                    </a>
                  </li>
                </ul>
              )}
              {darkMode && (
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/eidalmutairi0/">
                      <img src={linkedinLight} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/EidAlmutairi0">
                      <img src={githubLight} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto: eidalmutairi0@gmail.com">
                      <img src={emailLight} alt="" />
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="i-right">
            <div className="i-right-wrapper">
              <img src={Me} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro;
