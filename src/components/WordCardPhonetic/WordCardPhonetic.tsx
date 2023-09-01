import { WordType } from "types/word";
import styles from "./WordCardPhonetic.module.scss";
import { ReactComponent as PlayIcon } from "assets/images/icon-play.svg";
import { useState } from "react";

interface WordCardPhoneticProps {
  word: WordType["word"];
  phonetics: {
    text?: string;
    audio: string;
  }[];
}
export const WordCardPhonetic = ({
  word,
  phonetics,
}: WordCardPhoneticProps) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const playAudio = (audio: string) => {
    setAudioUrl(audio);
    const audioElement = new Audio(audio);
    audioElement.play();
  };

  // Выбираем первый элемент из массива phonetics, если он существует
  const firstPhonetic = phonetics[0];

  return (
    <div className={styles.wordCardPhonetic}>
      <h1 className={styles.word}>{word}</h1>
      {firstPhonetic && (
        <div className={styles.smth}>
          <h3>{firstPhonetic.text}</h3>
          <PlayIcon
            className={styles.playIcon}
            onClick={() => playAudio(firstPhonetic.audio)}
          />
        </div>
      )}
    </div>
  );
};
