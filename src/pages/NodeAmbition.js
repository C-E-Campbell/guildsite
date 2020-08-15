import React from 'react';
import FaqQuestion from '../components/FaqQuestion';
import styles from './Requirements.module.css';
export default function NodeAmbition() {
  return (
    <div className={styles.container}>
      <FaqQuestion
        question="Have we decided on a node type?
"
        answer="Sort-of, but this is internal information. I also say sort-of in that we’ve narrowed it down. Keep reading to understand why."
      />
      <FaqQuestion
        question="Aren’t snowy mountains awesome?"
        answer="Yes… Yes.. they are. We love them. So many people do. To that end, we want to deliberately avoid this and are comfortable making that one part known. We want individuals seeking a unique adventure together as a Guild destined for profit, regardless of terrain.
"
      />
      <FaqQuestion
        question="Will we offer major perks to Guild Members or Allied Guilds?
"
        answer="Quite a few one-of a kind perk/s. We are developing a web-based Contract Board for matching Guild Members with Artisans & Bounty Hunters in our internal ‘Band of the Falcon’ Guild led by our Falcon of Light.
The Falcon & his 2 Shield~Officers will handle transactions as well as coordinate with Treasurer Jade.
Players interested in frequent / active Player-vs-Player activities will want to be allied with our Band of the Hawk faction ~ as they will be leading elite teams for Caravan protection, Siege special-forces for offense & defense, & will coordinate with our War Council for strategy preparation.  
Guild Members will have post-access to this Contract Board to establish shops, list prices for services rendered, etc.
Allied Guilds in those coveted 3 slots will possibly be granted code access to a buyer’s view of our Contract Board and establish service contracts with our Hunters or Artisans. This will be based on trust between our diplomats & leadership.
"
      />
    </div>
  );
}
