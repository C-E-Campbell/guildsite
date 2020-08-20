import React, { useEffect } from 'react';
import FaqQuestion from '../components/FaqQuestion';
import styles from './Requirements.module.css';
export default function Factions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <FaqQuestion
        question='Will this guild be following a specific religion or is there religious freedom?'
        answer='We do not know enough about the Religion system yet and its potential to answer this question right now.
        '
      />
      <FaqQuestion
        question='Will there be a limit on certain artisans?
        '
        answer="There's two classes in this category: Guild Artisans, And Masters. We'll take as many varied masters as we can get. As for Guild Artisans, there may only be 1-3 per trade pending our needs or as we learn more information. Ship-building for example will be restricted to 1 Guild Artisan, and he will coordinate with our Treasurer and other Artisans as required.
        "
      />
      <FaqQuestion
        question='How involved will life-skill players be?

'
        answer='Extremely. 
        We plan to organize a system with our central and eventual chain of Taverns so Chefs will have a major retail space for stocking product
        Our Gatherers, Processors, & Smelters will be busy at every turn from
        Upgrading our node,
        Building our homes,
        Gearing our Raiders & Siegers,
        Makin toast.
        Our Contract system will allow an Alchemist to set up a regular shop and list prices to build a regular customer-base (just 1 example)
        '
      />
      <FaqQuestion
        question='How involved will Bounty Hunter / PvP players be?'
        answer='Ridiculous levels of involvement. These players will work with our Falcon of Light (PvP Captain, his sub-officers, & our Treasurer - as we: 
            Arrange contracts internally and externally for asset protection. Our Contract system that will be available to allies - will host options for:
            One-time, or duration-based route protection,
            Specialty-Escorts,
            Groups of Rogues or other arrangements that will focus on strategic levels of play & disruption,
            Rich-vein escort & protection for gathering professionals.
            
        '
      />
    </div>
  );
}
