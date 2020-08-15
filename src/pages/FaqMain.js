import React from 'react';
import styles from './FaqMain.module.css';
import FaqSquares from '../components/FaqSquare';
import Footer from '../components/Footer';

export default function FaqMain() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h2 className={styles.h2}>FAQ</h2>
          <div className={styles.subjectContainer}>
            <FaqSquares title="101 & Requirements" />
            <FaqSquares title="Guild Ambition" />
            <FaqSquares title="Interior Factions" />
          </div>
          <div className={styles.subjectContainer}>
            <FaqSquares title="Raiding" />
            <FaqSquares title="Node Ambition" />
            <FaqSquares title="Launch Plans" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
