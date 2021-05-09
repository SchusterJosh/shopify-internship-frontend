import React from "react";
import styles from "./SearchResults.module.scss";

export const SearchResults = ({
  addNomination,
  results,
  nominations,
  setQuery,
}) => {
  return (
    <div className={styles.searchDisplay}>
      <ul className={styles.list}>
        {results.map((result) => (
          <li key={result.id}>
            <p>
              {result.title} ({result.year})
            </p>
            <button
              disabled={
                nominations.length > 0
                  ? nominations.find((query) => query.id === result.id)
                  : null
              }
              onClick={() => {
                addNomination(result);
                setQuery("");
              }}
            >
              Nominate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
