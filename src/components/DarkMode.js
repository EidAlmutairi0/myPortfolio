import React, { useContext, useState } from "react";
import DarkModeContext from "./DarkModeContext";

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  console.log(darkMode);

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={changeMode}
      />
      <label
        htmlFor="checkbox"
        className={`label ${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div
          className={`ball ${darkMode ? "ball-dark-mode" : "ball-light-mode"}`}
        />
      </label>
    </div>
  );
};

export default DarkModeSwitch;
