import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import style from './PreSiteVideo.module.css';
import video from '../assets/video/fire.mp4';
import Logo from '../assets/images/logo.png';
import audio from '../assets/music/HeroesOfOId-Mix1.mp3';
function PreSiteVideo(props) {
  const [playing, setPlaying] = useState(false);

  const goToSite = () => {
    toggle();
    props.history.push('/main');
  };

  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    playing ? audioEl.play() : audioEl.pause();
  }, [playing]);

  return (
    <div className={style.video_container}>
      <audio className="audio-element">
        <source src={audio} loop />
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
          toggle();
        }}
        className={style.sound}
      >
        {playing ? (
          <i className="fa fa-volume-off fa-2x sound" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-volume-up fa-2x sound" aria-hidden="true"></i>
        )}
      </button>
    </div>
  );
}

export default withRouter(PreSiteVideo);
