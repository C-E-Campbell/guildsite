import React, { useState } from 'react';
import styles from '../components/FaqQuestion.module.css';
export default function FaqQuestion(props) {
  const [open, SetOpen] = useState(false);

  return (
    <div onClick={() => SetOpen(!open)} className={styles.faqContainer}>
      <h3 className={styles.title}>{props.question}</h3>
      {open ? <h5 className={styles.answer}>{props.answer}</h5> : null}
    </div>
  );
}
