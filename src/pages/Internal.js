import React from 'react';
import style from './Internal.module.css';
import Default from '../assets/images/default.png';
export default function Internal() {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <img className={style.default} src={Default} />
        <h3>Char Name</h3>
        <h3>race</h3>
        <h3>class</h3>
      </div>
      <div className={style.main}></div>
    </div>
  );
}
