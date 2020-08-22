import React from 'react';
import style from './internalNav.module.css';
import { NavLink } from 'react-router-dom';
export default function internalNav(props) {
  return (
    <div className={style.container}>
      <button
        className={style.navlink}
        activeClassName={style.selected}
        onClick={() => props.pick('Contracts')}
      >
        Contracts
      </button>

      <button
        className={style.navlink}
        activeClassName={style.selected}
        onClick={() => props.pick('Demo')}
      >
        Demographics
      </button>
      <button
        className={style.navlink}
        activeClassName={style.selected}
        onClick={() => props.pick('Teams')}
      >
        Raid Teams
      </button>
      <button
        className={style.navlink}
        activeClassName={style.selected}
        onClick={() => props.pick('Profile')}
      >
        Profile
      </button>
    </div>
  );
}
