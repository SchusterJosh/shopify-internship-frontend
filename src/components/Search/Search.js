import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import { SearchResults } from '../SearchResults/SearchResults';
import axios from 'axios';

export const Search = ({ results, setResults }) => {
  const [query, setQuery] = useState('Star Wars');
  const [show, setShow] = useState(true);

  const onChange = async (e) => {
    if (e.target.value.length > 0) {
      // setShow(true);
    } else {
      // setShow(false);
      // setQuery('');
      // setResults([]);
    }

    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.post('http://localhost:5000/api/search', {
  //       query,
  //     });
  //     setResults(result.data.result);
  //   };

  //   fetchData();
  // }, [query, setResults]);

  return (
    <div className={styles.search}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4 25.9861C16.4698 25.9861 19.2605 24.8977 21.4372 23.0558L31.2046 32.8233C31.4279 33.0465 31.707 33.1582 32.014 33.1582C32.3209 33.1582 32.6 33.0465 32.8233 32.8233C33.2698 32.3768 33.2698 31.6512 32.8233 31.2047L23.0558 21.4372C24.8698 19.2605 25.986 16.4419 25.986 13.4C25.986 6.45117 20.3488 0.813965 13.4 0.813965C6.47907 0.813965 0.81395 6.47908 0.81395 13.4C0.81395 20.3488 6.47907 25.9861 13.4 25.9861ZM13.4 3.10234C19.093 3.10234 23.6977 7.7349 23.6977 13.4C23.6977 19.093 19.093 23.6977 13.4 23.6977C7.70697 23.6977 3.10232 19.0651 3.10232 13.4C3.10232 7.7349 7.73488 3.10234 13.4 3.10234Z"
          fill="#0E981C"
        />
      </svg>
      <input
        className={styles.input}
        placeholder="Search for a movie..."
        type="text"
        onChange={onChange}
        value={query}
      />
      {show ? <SearchResults results={results.slice(0, 5)} /> : null}
    </div>
  );
};
