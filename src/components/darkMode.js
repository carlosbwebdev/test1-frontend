import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const DarkMode = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="darkModeBtn">
          <label for="toggle">dar</label>
          <input
            id="toggle"
            className={"visually-hidden"}
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          ></input>
          <div className={"control-me"}></div>
        </div>
      )}
    </ThemeToggler>
  );
};

export default DarkMode;
