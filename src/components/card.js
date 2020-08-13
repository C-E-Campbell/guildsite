import React from 'react';

import style from './card.module.css';
export default function card(props) {
  return (
    <div className={style.card}>
      <img className={style.img} src={props.img} alt="services" />
      <h4 className={style.title}>{props.title}</h4>
      <hr className={style.hr} />
      <p className={style.paragraph}>{props.description}</p>
    </div>
  );
}
