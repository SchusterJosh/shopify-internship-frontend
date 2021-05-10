import React from 'react';
import styles from './Banner.module.scss';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>
        Maximum number of nominations reached (5). If you wish to add a
        different movie, remove one of the nominated films.
      </p>
    </div>
  );
};
