import React, { useState } from 'react';
import styles from '../components/FaqQuestion.module.css';
export default function FaqQuestion(props) {
  const [open, SetOpen] = useState(false);

  return (
    <div
      data-aos-once="true"
      data-aos="fade"
      data-aos-delay="50"
      onClick={() => SetOpen(!open)}
      className={styles.faqContainer}
    >
      <div className={styles.questionContainer}>
        {open ? (
          <i
            style={{ color: 'rgb(211, 167, 48)' }}
            className="fa fa-minus-circle icon"
            aria-hidden="true"
          ></i>
        ) : (
          <i className="fa fa-plus-circle icon" aria-hidden="true"></i>
        )}
        <h3 className={styles.title}>{props.question}</h3>
      </div>

      {open ? <h5 className={styles.answer}>{props.answer}</h5> : null}
    </div>
  );
}
