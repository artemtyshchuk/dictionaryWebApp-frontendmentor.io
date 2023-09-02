import React, { useState } from "react";
import styles from "./FontSwitcher.module.scss";
import { ReactComponent as ArrowIcon } from "assets/images/icon-arrow-down.svg";

export const FontSwitcher: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<string>("Space Mono");
  const [menu, setMenu] = useState<boolean>(false);

  const fontBlockRef = React.useRef<HTMLDivElement | null>(null);

  const handleArrowClick = () => {
    setMenu(!menu);
  };

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
    setMenu(false);

    document.documentElement.style.setProperty("--main-font", font);
  };

  return (
    <div className={styles.fontSwitcher}>
      <div className={styles.font} onClick={handleArrowClick}>
        {selectedFont}
      </div>
      <ArrowIcon className={styles.arrow} onClick={handleArrowClick} />
      {menu && (
        <div className={styles.fontBlock} ref={fontBlockRef}>
          <div className={styles.menu}>
            <p
              className={styles.fontBlockSansSerif}
              onClick={() => handleFontChange("Inter, sans-serif")}
            >
              Sans Serif
            </p>
            <p
              className={styles.fontBlockSerif}
              onClick={() => handleFontChange("Lora, serif")}
            >
              Serif
            </p>
            <p
              className={styles.fontBlockMono}
              onClick={() => handleFontChange("Space Mono")}
            >
              Space Mono
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
