import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import style from './PreSiteVideo.module.css';
import video from '../assets/video/newLanding.mp4';
import Logo from '../assets/images/logo.png';
import audio from '../assets/music/HeroesOfOId-Mix1.mp3';
function PreSiteVideo(props) {
  const [sound, SetSound] = useState(false);

  const goToSite = () => {
    SetSound(false);
    props.history.push('/main');
  };

  return (
    <div className={style.video_container}>
      <audio>
        <source src={audio} muted={sound} autoPlay loop />
      </audio>

      <img className={style.logo} src={Logo} alt="aota" />
      <div className={style.overlay}></div>
      <video className={style.video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <button onClick={goToSite} className={style.button}>
        Enter
        {/* <i className="fa-volume-up"></i> */}
      </button>
      <button
        onClick={() => {
          SetSound(!sound);
        }}
        className={style.sound}
      >
        {sound ? 'Sound' : 'Sound Muted'}
      </button>
    </div>
  );
}

export default withRouter(PreSiteVideo);
