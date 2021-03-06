import React, { useState } from 'react';
import styles from './App.module.scss';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { Nominations } from './components/Nominations/Nominations';

export const App = () => {
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [show, setShow] = useState(false);

  const addNomination = (newNomination) => {
    if (nominations.length < 5) {
      let nominationCopy = [...nominations];
      nominationCopy.push(newNomination);
      setNominations(nominationCopy);
    } else {
      return nominations;
    }
  };

  const removeNomination = (selected) => {
    let newNominationsList = [...nominations].filter(
      (nomination) => nomination.id !== selected.id
    );
    setNominations(newNominationsList);
  };

  return (
    <div className={styles.container}>
      <Header
        results={results}
        setResults={setResults}
        addNomination={addNomination}
        nominations={nominations}
        show={show}
        setShow={setShow}
      />
      {nominations.length === 5 ? <Banner /> : null}
      <Nominations
        nominations={nominations}
        removeNomination={removeNomination}
      />
    </div>
  );
};
