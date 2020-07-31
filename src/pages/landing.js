import React from 'react';
import style from './landing.module.css';
import video from '../assets/video/newLanding.mp4';
import logo from '../assets/images/logo.png';

export default function landing() {
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <div className={style.landing_container}>
          <img
            data-aos="fade-in"
            alt="logo"
            className={style.logo}
            src={logo}
          />
          <h1 className={style.headline} data-aos="fade-in">
            Apostles of the Abyss
          </h1>
        </div>
        <div className={style.overlay}></div>
        <div className={style.video_container}>
          <video className={style.video} autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={style.article}>
        <h2 data-aos="fade-left" className={style.h2}>
          Guild Mission
        </h2>
        <p data-aos="fade-right" className={style.body_text}>
          Welcome to the Apostles, Branded one... We are a dedicated community
          with the goal of creating and maintaining an ecosystem of players
          working to make our mark and synergize with each other for the good of
          all
        </p>
      </div>
    </div>
  );
}
