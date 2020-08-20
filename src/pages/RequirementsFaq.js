import React, { useEffect } from 'react';
import FaqQuestion from '../components/FaqQuestion';
import styles from './Requirements.module.css';
export default function RequirementsFaq(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <FaqQuestion
        question='What are the requirements to join Apostles of the Abyss?'
        answer='We’re looking for players that are motivated and driven
You should be planning to play & be active within our community by launch time at least 4 evenings a week during our Prime-Time.
You must have a headset to listen in for team communication via Discord. Mic required only for leadership & officer roles, but strongly requested.
'
      />
      <FaqQuestion
        question='Will your guild be active in the Alpha/Beta tests?'
        answer='There are a couple of members with Alpha-1 access, few members that will have Alpha-2 access, and a decent amount of our members will have beta access. While access is not required to join, we are hoping to have 40-60%/+ of our members active in the beta. We will also have several people dedicated to streaming Alpha / Beta for our members to watch & learn from.
'
      />
      <FaqQuestion
        question='Will we be active before the release of Ashes of Creation?'
        answer='Yes, keep reading. But also ~ We don’t want to just be a reservation spot for you, although we can be. But we want you to be invested in reserving your spot and playing to grow with us. If we have synergy on launch, we will dominate. 
'
      />
      <FaqQuestion
        question='What will be our most active time of day?'
        answer='6 PM until 12 ~ 1 A.M. Sunday - Thursday &
    5 PM until 2 A.M. Friday & Saturday'
      />
      <FaqQuestion
        question='What activity will get me kicked or suspended?'
        answer='Being inactive for over 30 days with no notice or reasonable explanation.
Being blatantly awful to another Guild-mate based on case.
Exploiting / using any cheats in an MMO environment.
Leaking of private information to outside sources.
Streaming during vulnerable events without leadership permission.
Streaming without guild-mate notice or permission to be included.
'
      />
      <FaqQuestion
        question='Is your community currently playing any games together before AoC launches?'
        answer="While we wait on Ashes of Creation, strategy... Playing with us in key titles we organize should be indicative of how we will operate in Ashes of Creation~ Helping others, creating guides & FAQ's frequently updated, indexes for helping you succeed faster, and working together to move forward. We felt Final Fantasy XI promoted many of Ashes of Creation’s key qualities requiring cooperation with others within its own mechanics.

        Serpico & Kino will co-head the open-invite (probably Saturday) nights in/after October for Star Wars: Squadrons. He'll also be the leader of the Last Epoch Division. 
        
        There are a couple others active if you're interested in trying out Black Desert, or a few people enjoying Deep Rock Galactic together if you'd like to drink beer and mine in space as dwarves fighting off bastardly spider and insectoid alien things..
        "
      />
    </div>
  );
}
