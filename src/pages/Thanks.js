import React from 'react';
import styles from './Thanks.module.css';
export default function Thanks() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Thanks for applying!</h1>
        <p className={styles.p}>We will reach out to you on Discord! </p>
        <p className={styles.p}>
          If you would like to speed up the process just join our Discord
          server, we are very welcoming.
        </p>
        <p className={styles.p}>
          <a
            className={styles.a}
            href="https://discord.gg/pJpFGRn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Link
          </a>
        </p>
      </div>
    </div>
  );
}
