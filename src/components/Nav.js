import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';

export default function Nav() {
  return (
    <div className={style.container}>
      <div className={style.nav_container}>
        <NavLink
          activeClassName={style.selected}
          className={style.navlink}
          exact
          to='/main'
        >
          HOME
        </NavLink>
        {/* <NavLink
          className={style.navlink}
          activeClassName={style.selected}
          exact
          to="/faq"
        >
          FAQ
        </NavLink> */}
        <NavLink
          className={style.navlink}
          activeClassName={style.selected}
          exact
          to='/apply'
        >
          APPLY
        </NavLink>
        <NavLink
          className={style.navlink}
          activeClassName={style.selected}
          exact
          to='/faq'
        >
          FAQ
        </NavLink>
        {/* <NavLink
          className={(style.navlink, style.hideOnMobile)}
          activeClassName={style.selected}
          exact
          to='/Streams'
        >
          STREAM
        </NavLink> */}
        <a
          href='https://discord.com/channels/735220428397609023/735220428645204097'
          target='_blank'
          className={style.navlink}
          rel='noopener noreferrer'
        >
          DISCORD
        </a>
        <NavLink
          className={(style.navlink, style.hideOnMobile)}
          activeClassName={style.selected}
          exact
          to='/login'
        >
          LOGIN/REGISTER
        </NavLink>
      </div>
    </div>
  );
}
