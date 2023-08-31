import { ThemeSwitcher } from "components/ThemeSwitcher";
import styles from "./TheHeader.module.scss";
import { ReactComponent as LogoIcon } from "assets/images/logo.svg";

interface TheHeaderProps {}

export const TheHeader = ({}: TheHeaderProps) => {
  return (
    <div className={styles.header}>
      <LogoIcon />
      <ThemeSwitcher />
    </div>
  );
};
