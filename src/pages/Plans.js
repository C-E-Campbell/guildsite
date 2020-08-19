import React from 'react';
import FaqQuestion from '../components/FaqQuestion';
import styles from './Requirements.module.css';
export default function Plans() {
  return (
    <div className={styles.container}>
      <FaqQuestion
        question='Why are we being so secretive?
'
        answer='Because we don’t want others to interfere with our plans, just as we aren’t scheming against anyone else. There is also just so much we’re still learning about the game, and things we just don’t know yet. It’s difficult to fully develop ideas until a more complete database exists for a knowledge-base.
'
      />
      <FaqQuestion
        question='Have we decided on a node area / cluster?
'
        answer='Same as above answer, these talks will remain private, but to expand on these issues as you’ll continue to see ~ We want to run a diplomatic economy. In that respect, we are occasionally running polls to gauge what the majority of our players are interested in and building some discussions based on those results.

To get best, most accurate results, we want to push for 125 ~ 150/+ and run a few key polls, have a couple of targeted discussions, & make some decisions together.
'
      />
      <FaqQuestion
        question='Will we be streaming anything?
'
        answer='We have several members that will be streaming parts of Alpha, Beta, & launch. We have an official Twitter & Twitch:

Twitter: https://twitter.com/AbyssApostles &
Twitch: https://www.twitch.tv/apostlesoftheabyss
'
      />
    </div>
  );
}
