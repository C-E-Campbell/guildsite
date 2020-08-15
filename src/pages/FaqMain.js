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
            <FaqSquares title="Node Ambition" />
            <FaqSquares title="Guild Size" />
            <FaqSquares title="Guild Size" />
          </div>
          <div className={styles.subjectContainer}>
            <FaqSquares title="Guild Size" />
            <FaqSquares title="Guild Size" />
            <FaqSquares title="Guild Size" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
