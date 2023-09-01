import { Search } from "components/Search";
import { Container } from "./components/Container";
import { TheHeader } from "components/TheHeader";
import { WordCard } from "components/WordCard";
import { useState } from "react";
import { WordType, WordTypeError } from "types/word";
import { defaultWord } from "mock";
import { isWord } from "utils/typeGuard";
import { extractLocalWord } from "utils/extract-local-word";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  const [word, setWord] = useState<WordType | null>(defaultWord[0]);

  const fetchWord = async (theWord: string) => {
    const url = BASE_URL + theWord;

    const res = await fetch(url);
    const word = (await res.json()) as WordType | WordTypeError;
    if (isWord(word)) {
      setWord(extractLocalWord(word));
    } else {
      setWord(null);
    }
  };
  return (
    <Container>
      <TheHeader />
      <Search hasError={!word} onSubmit={fetchWord} />
      {word && <WordCard {...word} />}
    </Container>
  );
}

export default App;
