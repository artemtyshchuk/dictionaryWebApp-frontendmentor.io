import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { ReactComponent as MoonIcon } from "assets/images/icon-moon.svg";

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <label className={styles.themeSwitcher}>
      <input
        type="checkbox"
        className={styles.input}
        onClick={() => setDark(!isDark)}
      />
      <span className={styles.slider}></span>
      <MoonIcon className={styles.icon} />
    </label>
  );
};
