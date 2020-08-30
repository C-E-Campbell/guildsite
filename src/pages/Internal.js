import React, { useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import style from './Internal.module.css';
import Default from '../assets/images/default.png';
import InternalNav from '../components/internalNav';
import Contracts from './Contracts';
import Demo from './Demo';
import Teams from './Teams';
import Profile from './Profile';
function Internal(props) {
  const [showComp, SetShowComp] = useState('Contracts');
  const [charDetails, SetCharDetails] = useState({});

  const updateChar = (char) => {
    SetCharDetails(char);
  };
  const pickComponent = (comp) => {
    SetShowComp(comp);
  };
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <img className={style.default} src={Default} />

        <h3>Name</h3>

        <h3>Race</h3>
        <h3>Class</h3>

        <button
          onClick={(e) => {
            e.preventDefault();
            props.signout();
          }}
          className={style.signOut}
        >
          Sign Out
        </button>
      </div>
      <div className={style.main}>
        <div>
          <InternalNav pick={pickComponent} />
          {showComp === 'Contracts' ? (
            <Contracts />
          ) : showComp === 'Demo' ? (
            <Demo />
          ) : showComp === 'Teams' ? (
            <Teams />
          ) : showComp === 'Profile' ? (
            <Profile details={updateChar} />
          ) : (
            <Contracts />
          )}
        </div>
      </div>
    </div>
  );
}
export default withRouter(Internal);
