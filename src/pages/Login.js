import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios';

function Login(props) {
  const [register, SetRegister] = useState(false);
  const [code, SetCode] = useState('');
  const [email, SetEmail] = useState('');
  const [user, SetUser] = useState('');
  const [password, SetPassword] = useState('');

  const handleSubmit = () => {
    axios.post('/api/v1/register', {
      code,
      email,
      user,
      password,
    });
  };
  if (register) {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <form onSubmit={() => handleSubmit()} className={styles.form}>
            <label className={styles.label}>Guild Invite Code</label>
            <input
              value={code}
              onChange={(e) => SetCode(e.target.value)}
              required
              className={styles.input}
              placeholder='enter invite code'
              type='password'
            />
            <label className={styles.label}>Email</label>
            <input
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              required
              className={styles.input}
              placeholder='enter email'
              type='email'
            />
            <label className={styles.label}>Username</label>
            <input
              value={user}
              onChange={(e) => SetUser(e.target.value)}
              required
              className={styles.input}
              placeholder='enter guild name'
              type='text'
            />
            <label className={styles.label}>Password</label>
            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              required
              className={styles.input}
              type='password'
              placeholder='enter password'
            />
            <button type='submit' className={styles.button}>
              Register
            </button>
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
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <form className={styles.form}>
            <label className={styles.label}>Username</label>
            <input className={styles.input} placeholder='enter username' />
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type='password'
              placeholder='enter password'
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
