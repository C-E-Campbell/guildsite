import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.innerContainer}>
        <div className={styles.box}>Div 1</div>
        <div className={styles.box}>Div 2</div>
      </div>
    </div>
  );
}
