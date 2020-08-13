import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Login.module.css';

function Login(props) {
  const [register, SetRegister] = useState(false);

  if (register) {
    return (
      <div data-aos="fade-in" className={styles.container}>
        <div className={styles.innerContainer}>
          <form className={styles.form}>
            <label className={styles.label}>Guild Invite Code</label>
            <input
              className={styles.input}
              placeholder="enter invite code"
              type="password"
            />
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              placeholder="enter email"
              type="text"
            />
            <label className={styles.label}>Username</label>
            <input
              className={styles.input}
              placeholder="enter guild name"
              type="text"
            />
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              placeholder="enter password"
            />
            <button className={styles.button}>Register</button>
          </form>
          <button
            className={styles.formSwitch}
            onClick={() => {
              SetRegister(!register);
            }}
          >
            Already in the Guild? Login Here!
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div data-aos="fade-in" className={styles.container}>
        <div className={styles.innerContainer}>
          <form className={styles.form}>
            <label className={styles.label}>Username</label>
            <input className={styles.input} placeholder="enter username" />
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              placeholder="enter password"
            />
            <button className={styles.button}>Login</button>
          </form>
          <button
            className={styles.formSwitch}
            onClick={() => {
              SetRegister(!register);
            }}
          >
            New to the Guild? Register Here!
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
