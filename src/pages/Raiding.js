import React, { useEffect } from 'react';
import FaqQuestion from '../components/FaqQuestion';
import styles from './Requirements.module.css';
export default function Raiding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <FaqQuestion
        question='What is our raiding mentality?
'
        answer='We will host at least both 1 Progression / Semi~HC Raid & 1 Mid-Core / Laid-back-but-focused Raid.
We don’t like the word Casual. While we understand its meaning, it is too often used as a sleight or insult within the community.
'
      />
      <FaqQuestion
        question='When will our Raid Schedule be announced?
'
        answer='Closer to Beta 1. Mid-Core players can expect one raid night to fall on Saturday evenings.
'
      />
      <FaqQuestion
        question='What is our approach to Raid Leadership?
'
        answer='Raid Leadership should be a team-mentality. 1~2 Raid Leaders, Dungeon Masters, & Class Leaders will all be attached to each Raiding team. This team will ensure fair practices are in place, our time is used wisely, & loot is distributed fairly.
'
      />
      <FaqQuestion
        question='What is our loot policy?
'
        answer=' For 16 & 40-person content, some form of Dragon Kill Points (DKP) will be used. For our progression-raid, an integrated / hybrid DKP + Loot Council will be used so that loot is distributed fairly.
Just as one example: For progression raiding, it will be important the upgrades go to the right people, such as prioritizing someone with regular attendance where the upgrade would be a 20% overall improvement compared to both a brand new member to the raid as well as someone to whom it would be a 5% increase.
Our exact DKP ruleset will be chosen & refined closer to Beta 1 & scheduling announcements. 
'
      />
    </div>
  );
}
