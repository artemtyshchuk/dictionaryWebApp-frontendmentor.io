import { WordType } from "types/word";
import styles from "./WordCard.module.scss";
import { WordCardPhonetic } from "components/WordCardPhonetic";

interface WordCardProps extends WordType {}

export const WordCard = (props: WordCardProps) => {
  return (
    <div className={styles.wordCard}>
      <WordCardPhonetic word={props.word} phonetics={props.phonetics} />
    </div>
  );
};
