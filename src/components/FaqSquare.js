import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../components/FaqSquare.module.css';
function FaqSquare(props) {
  return (
    <div
      onClick={() => {
        props.history.push(`/${props.url}`);
      }}
      className={styles.box}
    >
      {props.title}
    </div>
  );
}

export default withRouter(FaqSquare);
