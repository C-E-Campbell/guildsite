import React, { useEffect } from 'react';
import Question from '../components/FaqQuestion';
import style from '../styles/FAQ.module.css';
import Footer from '../components/Footer';
export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={style.container}>
        <h3 className={style.h3}>Guild FAQ</h3>
        <div className={style.innerContainer}>
          <Question
            question={'Will your guild be active in the Alpha/Beta tests?'}
            answer={
              'There are a couple of members with Alpha-1 access, few members that will have Alpha-2, and a decent amount of members that will beta access. While access is not required to join, we are aiming to 30-40% of our members active in the beta'
            }
          />
          <Question
            question={
              'Will this guild be following a specific religion or is there religious freedom?'
            }
            answer={
              'We do not know enough about the Religion system yet and its potential to answer this question right now.'
            }
          />
          <Question
            question={'Will there  be a limit on certain artisans?'}
            answer={
              "There are two classes: Guild Artisans and Masters. We'll take as many varied masters as we can get. As for Guild Artisans, there may onlybe 1-3 per trade pending our needs or as we learn more information. "
            }
          />
          <Question
            question={'What style of community are you trying to build?'}
            answer={
              "We are trying to build a relatively sizeable community of all types of players: Casual, Hardcore, PvP players ect. Regardless of how you want to play the game, we'd be more than hapy to have you participate in the community. "
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
