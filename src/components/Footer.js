import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/images/redLogo.png';
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.innerContainer}>
        <div className={styles.box}>
          <h3 className={styles.h3}>Apostles of the Abyss</h3>
          <h4 className={styles.h4}>An Ashes of Creation Guild</h4>
          <img className={styles.logo} src={logo} />
        </div>
        <div className={styles.box}>
          <iframe
            src="https://discordapp.com/widget?id=735220428397609023&theme=dark"
            width="100%"
            height="100%"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
