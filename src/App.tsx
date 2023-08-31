import { Search } from "components/Search";
import { Container } from "./components/Container";
import { TheHeader } from "components/TheHeader";
import { WordCard } from "components/WordCard";
import { useState } from "react";
import { WordType } from "types/word";
import { defaultWord } from "mock";

function App() {
  const [word, setWord] = useState<WordType | null>(defaultWord[0]);
  return (
    <Container>
      <TheHeader />
      <Search hasError={!word} onSubmit={() => {}} />
      {word && <WordCard {...word} />}
    </Container>
  );
}

export default App;
