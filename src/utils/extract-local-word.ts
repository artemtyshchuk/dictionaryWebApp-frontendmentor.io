import { WordType } from "types/word";

export const extractLocalWord = (word: WordType): WordType => ({
  word: word.word,
  phonetics: word.phonetics,
  meanings: word.meanings,
});
