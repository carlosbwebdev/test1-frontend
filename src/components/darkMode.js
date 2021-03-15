// import React from "react";
// import { ThemeToggler } from "gatsby-plugin-dark-mode";

// const DarkMode = () => {
//   return (
//     <ThemeToggler>
//       {({ theme, toggleTheme }) => (
//         <div className="darkModeBtn">
//           <label for="toggle">dar</label>
//           <input
//             id="toggle"
//             className={"visually-hidden"}
//             type="checkbox"
//             onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
//             checked={theme === "dark"}
//           ></input>
//           <div className={"control-me"}></div>
//         </div>
//       )}
//     </ThemeToggler>
//   );
// };

// export default DarkMode;

import React from "react";
import "../css/DarkMode.css";

const DarkMode = () => {
  if (typeof document !== `undefined`) {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
      theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme);
    } else {
      body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
      if (theme === darkTheme) {
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme;
      } else {
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme;
      }
    };

    return (
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        className={"btnDarkMode"}
        onClick={(e) => switchTheme(e)}
      ></button>
    );
  }
};

export default DarkMode;
