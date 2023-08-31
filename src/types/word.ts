type Phonetics = {
  audio: string;
  sourceUrl: string;
  text?: string;
};

type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type WordType = {
  word: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
};
