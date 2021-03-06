import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/images/redLogo.png';
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.innerContainer}>
        <div className={styles.textBox}>
          <h3 className={styles.h3}>Apostles of the Abyss</h3>
          <h4 className={styles.h4}>An Ashes of Creation Guild</h4>
          <h5>Find Us Here</h5>
          <div className={styles.iconBox}>
            <a
              rel='noopener noreferrer'
              href='https://twitter.com/AbyssApostles'
              target='_blank'
            >
              <i className='fab fa-twitter fa-2x '></i>
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://www.twitch.tv/apostlesoftheabyss'
            >
              <i className='fab fa-twitch fa-2x'></i>
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://discord.com/channels/735220428397609023/735220428645204097'
            >
              <i class='fab fa-discord fa-2x'></i>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <iframe
            src='https://discordapp.com/widget?id=735220428397609023&theme=dark'
            width='100%'
            height='100%'
            allowtransparency='true'
            frameborder='0'
            sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
