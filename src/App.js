import React, { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Nominations } from './components/Nominations/Nominations';

export const App = () => {
  const [results, setResults] = useState([
    {
      title: 'Star Wars',
      year: 1977,
      poster: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
      id: 11,
      popularity: 85.005,
    },
    {
      title: 'Star Wars: The Rise of Skywalker',
      year: 2019,
      poster: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
      id: 181812,
      popularity: 188.096,
    },
    {
      title: 'Star Wars: The Last Jedi',
      year: 2017,
      poster: '/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      id: 181808,
      popularity: 72.018,
    },
    {
      title: 'Solo: A Star Wars Story',
      year: 2018,
      poster: '/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg',
      id: 348350,
      popularity: 60.146,
    },
    {
      title: 'Star Wars: The Force Awakens',
      year: 2015,
      poster: '/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg',
      id: 140607,
      popularity: 58.488,
    },
  ]);
  return (
    <div className={styles.container}>
      <Header results={results} setResults={setResults} />
      <Nominations />
    </div>
  );
};
