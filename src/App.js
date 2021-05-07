import React, { useState } from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Nominations } from "./components/Nominations/Nominations";

export const App = () => {
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  const addNomination = (newNomination) => {
    if (nominations.length < 5) {
      let nominationCopy = [...nominations];
      nominationCopy.push(newNomination);
      setNominations(nominationCopy);
    } else {
      return nominations;
    }
  };

  return (
    <div className={styles.container}>
      <Header
        results={results}
        setResults={setResults}
        addNomination={addNomination}
        nominations={nominations}
      />
      <Nominations nominations={nominations} />
    </div>
  );
};
