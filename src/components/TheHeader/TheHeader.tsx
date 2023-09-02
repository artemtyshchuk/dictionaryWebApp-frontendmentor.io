import { ThemeSwitcher } from "components/ThemeSwitcher";
import styles from "./TheHeader.module.scss";
import { ReactComponent as LogoIcon } from "assets/images/logo.svg";
import { FontSwitcher } from "components/FontSwitcher";

export const TheHeader = () => {
  return (
    <div className={styles.header}>
      <LogoIcon />
      <div className={styles.fontAndTheme}>
        <FontSwitcher />
        <span className={styles.verticalDivider}></span>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
