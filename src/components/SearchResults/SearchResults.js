import React from 'react';
import styles from './SearchResults.module.scss';

export const SearchResults = ({ loading, results }) => {
  return (
    <div className={styles.searchDisplay}>
      <ul className={styles.list}>
        {results.map((result) => (
          <li key={result.id}>
            <p>
              {result.title} ({result.year})
            </p>
            <button>Nominate</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
