import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './FaqMain.module.css';
import FaqSquares from '../components/FaqSquare';
import Footer from '../components/Footer';

function FaqMain(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h2 className={styles.h2}>FAQ</h2>
          <div className={styles.subjectContainer}>
            <FaqSquares url="requirements" title="101 & Requirements" />
            <FaqSquares url="guild_ambition" title="Guild Ambition" />
            <FaqSquares url="factions" title="Interior Factions" />
          </div>
          <div className={styles.subjectContainer}>
            <FaqSquares url="raiding" title="Raiding" />
            <FaqSquares url="node_ambition" title="Node Ambition" />
            <FaqSquares url="plans" title="Launch Plans" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withRouter(FaqMain);
