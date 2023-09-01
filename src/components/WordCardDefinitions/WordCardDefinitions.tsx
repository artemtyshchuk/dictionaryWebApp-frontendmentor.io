import styles from "./WordCardDefinitions.module.scss";

interface WordCardDefinitionsProps {
  meanings: {
    partOfSpeech: string;
    synonyms: string[];
    antonyms: string[];
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
  }[];
}

export const WordCardDefinitions = ({ meanings }: WordCardDefinitionsProps) => {
  return (
    <div className={styles.wordCardDefinitions}>
      {meanings.map((meaning, index) => (
        <div key={index}>
          {meaning.synonyms.length > 0 && (
            <div className={styles.synonyms}>
              <p className={styles.synonymsTitle}>Synonyms</p>

              {meaning.synonyms.map((synonym, synonymIndex) => (
                <p key={synonymIndex} className={styles.synonym}>
                  {synonym}
                </p>
              ))}
            </div>
          )}

          <p className={styles.partOfSpeech}>{meaning.partOfSpeech}</p>
          <p className={styles.meaning}>Meaning</p>

          {meaning.definitions.map((definition, definitionIndex) => (
            <div key={definitionIndex}>
              <p className={styles.definition}>{definition.definition}</p>

              <p className={styles.example}>{definition.example}</p>

              {definition.synonyms.length > 0 && (
                <div className={styles.synonyms}>
                  <p className={styles.synonymsTitle}>Synonyms</p>

                  {definition.synonyms.map((synonym, synonymIndex) => (
                    <p key={synonymIndex} className={styles.synonym}>
                      {synonym}
                    </p>
                  ))}
                </div>
              )}
              {definition.antonyms.length > 0 && (
                <div className={styles.antonyms}>
                  <p className={styles.antonymsTitle}>Antonyms</p>

                  {definition.antonyms.map((antonym, antonymIndex) => (
                    <p key={antonymIndex} className={styles.antonym}>
                      {antonym}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
          {meaning.antonyms.length > 0 && (
            <div className={styles.antonyms}>
              <p className={styles.antonymsTitle}>Antonyms</p>

              {meaning.antonyms.map((antonym, antonymIndex) => (
                <p key={antonymIndex} className={styles.antonym}>
                  {antonym}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
