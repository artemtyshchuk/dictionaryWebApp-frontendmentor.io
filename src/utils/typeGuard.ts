import { WordType } from "types/word";

export const isWord = (word: any): word is WordType => "word" in word;
