import React, { useEffect } from 'react';
import style from './landing.module.css';
import logo from '../assets/images/redLogo.png';
import Nav from '../components/Nav';
import Card from '../components/card';
import Caravan from '../assets/images/Caravan 1.png';
import Guild from '../assets/images/Leadership.png';
import Raiding from '../assets/images/Raiding.png';
import Council from '../assets/images/Councils.png';
import Bounty from '../assets/images/Bounty Hunters.png';
import Artisans from '../assets/images/Artisans.png';
import Footer from '../components/Footer';

export default function landing() {
  return (
    <div className={style.pageContainer}>
      <Nav />
      <div className={style.main_container}>
        <div className={style.container}>
          <div className={style.landing_container}></div>
          <div className={style.textBox}>
            <img className={style.mainLogo} src={logo} />
            <h1 className={style.logoP}>Apostles Of The Abyss</h1>
          </div>

          <div className={style.overlay}></div>
          <div className={style.video_container}></div>
        </div>

        <div className={style.article1}>
          <h4
            data-aos-once='true'
            data-aos='fade-up'
            data-aos-delay='50'
            className={style.h4}
          >
            We are the Apostles of the Abyss
          </h4>
          <h2
            data-aos-once='true'
            data-aos='fade-up'
            data-aos-delay='50'
            className={style.h2}
          >
            "Stacking the cobblestones to reach the castle in the sky"
          </h2>
          <p
            data-aos-once='true'
            data-aos='fade-up'
            data-aos-delay='50'
            className={style.blurb}
          >
            A dedicated PvX Ashes of Creation guild with the goal of creating &
            maintaining an active and welcoming community in order to make our
            mark within the game. We will rely on and work with each other to
            progress and succeed in the most daunting of tasks. As a guild, we
            will persistently strive to excel in all areas and aspects of the
            game, welcoming anyone regardless of their style of play. We are
            recruiting casual and hardcore: crafter, raider, dungeoneer, pvper
            or anything between. If you are looking to form lasting
            relationships that go beyond the boundaries of clocking in and
            clocking out for raids, this might be the guild for you.
          </p>
          <img src={logo} className={style.redLogo} />
        </div>
        <div className={style.article}>
          <h3
            data-aos-once='true'
            data-aos='fade'
            data-aos-delay='50'
            className={style.h4}
          >
            Guild Features
          </h3>
          <div className={style.cardContainer}>
            <Card
              img={Bounty}
              title='Guild Bounty Hunters'
              description="Our aptly named 'Band of the Falcon', this is the mercenary wing of our guild. These individual hunters have a very particular set of skills; 
            skills they have acquired over a very long career that will be integral to our success in the grander scale. They will be in charge of asset protection, anti-griefing, group disruption, siege strategies & more. 
            These talented players will earn a cut from guild contracts."
            />

            <Card
              img={Guild}
              title='Guild Leadership'
              description='Our leaders have been intricately involved in shaping & leading guilds to greatness since 2003. From FFXI, FFXIV, Aion, Rift, GW2 & more. 
            We strive to create a fun and welcoming place while also maintaining an orderly community that can achieve any level of content.'
            />
            <Card
              img={Raiding}
              title='Raiding'
              description='We will host two separate raiding groups, one will focus on progression and forging ahead. The other raiding group will be more laid back & allow for more casual players to still experience the end game raiding content.
            Each raiding group will have multiple leaders: the raid leader, dungeon masters & class leaders working together to ensure victory.'
            />
          </div>
          <div className={(style.cardContainer, style.hideOnMobile)}>
            <Card
              img={Caravan}
              title='Caravan Sevices'
              description='Our Bounty Hunters Guild will offer protection services for your caravan & cargo. We will also form contracts with 
            Ally & Vassal-Nodes for both single-shipments and long term protection of a route.'
            />
            <Card
              img={Council}
              title='Guild Councils'
              description='The guild will be run by several different councils, these groups of individuals will work in different parts of our guild ensuring each area is functioning smoothly. 
            All areas will be covered from interpersonal needs, to guild artisans projects, siege attack and defense, raiding, PvP and freehold activites.'
            />

            <Card
              img={Artisans}
              title='Guild Artisans'
              description='The guild will house a number of artisans and master artisans of all types, including
            gathers, processors and crafters. The guild will supprt and nourish both established and aspiring crafters. We will rely on them to help grow our node, build our homes, and arm our forces.'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
