import React, { useEffect } from 'react';
import FaqQuestion from '../components/FaqQuestion';
import styles from './Requirements.module.css';

export default function GuildAmbition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <FaqQuestion
        question='What style of community are you trying to build?'
        answer="We are trying build a relatively sizeable community of all types of players: Casual, Hardcore, pvp players, pve players, ect. Regardless of how you want to play the game, we'd be more than happy to have you participate in the community. That said, we will host both a mid-core / laid back - as well as a progression set of Raiders, a highly organized system of internal Bounty Hunters, and we have large ambitions for the game.
        "
      />
      <FaqQuestion
        question='What size of guild will this be?'
        answer='We aim to host the maximum of 300, with the possibility of further expansion.'
      />
      <FaqQuestion
        question='Will you be playing competitively?
'
        answer='We intend to be a Metropolis major Patron Guild. In addition, our Guild will be rolling out our expansion plans establishing ourselves as a major presence in the realm we settle on. We will host a progression-style raiding team, and our interior Bounty Hunters will be adept warriors dedicated to the cause.'
      />
      <FaqQuestion
        question='Has there been any thought put into Alliances?'
        answer='Yes. We will be reserving 2 Alliance spots for internal use, and the remaining 3 will be quite carefully considered. 1 Will be held for another Large / Patron Guild, the remaining 2 will be held for honorable Vassal Guilds.
        '
      />
    </div>
  );
}
