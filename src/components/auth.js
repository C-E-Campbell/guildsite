import React from 'react';
import style from './auth.module.css';

function auth() {
  //const [register, setRegister] = useState('');

  return (
    <div data-aos="fade-in" className={style.container}>
      <form className={style.form}>
        <label>USERNAME</label>
        <input type="text" />
        <label>PASSWORD</label>
        <input type="password" />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className={style.button}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default auth;
//onClick={() => setRegister(true)}
