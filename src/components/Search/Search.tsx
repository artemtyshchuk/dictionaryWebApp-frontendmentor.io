import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "assets/images/icon-search.svg";
import { ErrorComponent } from "components/ErrorComponent";
import { WordTypeError } from "types/word";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  word: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.word.value;
    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <>
      <form
        className={styles.search}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="word"
          placeholder="Search for any word..."
        />
        <label htmlFor="search" className={styles.label}>
          <SearchIcon className={styles.searchIcon} />
        </label>
      </form>
      {hasError && (
        <div className={styles.error}>
          <ErrorComponent />
        </div>
      )}
    </>
  );
};
