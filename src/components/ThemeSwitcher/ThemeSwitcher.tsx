import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { ReactComponent as MoonIcon } from "assets/images/icon-moon.svg";

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const currentTheme = isDark ? "dark" : "light";
    document.body.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [isDark]);

  const toggleDarkMode = () => {
    setDark(!isDark);
  };

  return (
    <label className={styles.themeSwitcher}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isDark}
        onChange={toggleDarkMode}
      />
      <span className={styles.slider}></span>
      <MoonIcon className={styles.icon} />
    </label>
  );
};
