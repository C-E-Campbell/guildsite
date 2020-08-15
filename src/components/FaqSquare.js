import React from 'react';
import styles from '../components/FaqSquare.module.css';
export default function FaqSquare(props) {
  return <div className={styles.box}>{props.title}</div>;
}
