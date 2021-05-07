import React from "react";
import styles from "./Nominations.module.scss";

export const Nominations = ({ nominations }) => {
  console.log(nominations.length);
  return (
    <div className={styles.container}>
      <h1>Nominations</h1>
      <div className={styles.nominations_cards}>
        {nominations.length > 0 ? (
          nominations.map((nomination) => (
            <div className={styles.card}>
              <p>{nomination.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/w200${nomination.poster}`}
                alt=''
              />
            </div>
          ))
        ) : (
          <p1>
            No nominations selected. Search for a movie and add it to your
            nominations list.
          </p1>
        )}
      </div>
    </div>
  );
};
