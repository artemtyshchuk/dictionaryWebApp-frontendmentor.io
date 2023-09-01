import { WordTypeError } from "types/word";
import styles from "./ErrorComponent.module.scss";

interface ErrorComponentProps {}

export const ErrorComponent = () => {
  return (
    <div className={styles.errorComponent}>
      <h1>😕</h1>
      <h2>No Definitions Found</h2>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};
