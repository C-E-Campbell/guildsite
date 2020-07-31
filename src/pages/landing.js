import React from 'react';
import style from './landing.module.css';
import video from '../assets/video/newLanding.mp4';
import logo from '../assets/images/logo.png';
import Auth from '../components/auth';
export default function landing() {
  return (
    <div className={style.container}>
      <img data-aos="fade-in" alt="logo" className={style.logo} src={logo} />
      <h1 data-aos="fade-in">Apostles of the Abyss</h1>
      <div className={style.overlay}></div>
      <div className={style.video_container}>
        <video className={style.video} autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div>
        <Auth />
      </div>
    </div>
  );
}
