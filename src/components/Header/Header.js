import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";

export const Header = ({
  results,
  setResults,
  addNomination,
  nominations,
  show,
  setShow,
}) => {
  return (
    <div className={styles.header}>
      <Logo />
      <Search
        results={results}
        setResults={setResults}
        addNomination={addNomination}
        nominations={nominations}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};
