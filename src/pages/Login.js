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
  const [passwordConfirm, SetPasswordConfirm] = useState('');

  const Login = async (e) => {
    e.preventDefault();
    await axios
      .post('/api/v1/auth/login', {
        user,
        password,
      })
      .then((data) => {
        console.log(data);
        if (data.data.token) {
          props.login();
          props.history.push('/internal');
        } else {
          props.history.push('/login');
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/v1/auth/register', {
      code,
      email,
      user,
      password,
      passwordConfirm,
    });

    SetCode('');
    SetEmail('');
    SetPassword('');
    SetUser('');
    SetPasswordConfirm('');
  };

  if (register) {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <form className={styles.form}>
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
              placeholder='enter username'
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
            <label className={styles.label}>Password Confirm</label>
            <input
              value={passwordConfirm}
              onChange={(e) => SetPasswordConfirm(e.target.value)}
              required
              className={styles.input}
              type='password'
              placeholder='re-enter password'
            />
            <button
              onClick={(e) => handleSubmit(e)}
              type='submit'
              className={styles.button}
            >
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
            <input
              value={user}
              onChange={(e) => SetUser(e.target.value)}
              required
              className={styles.input}
              placeholder='enter username'
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
            <button onClick={(e) => Login(e)} className={styles.button}>
              Login
            </button>
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
