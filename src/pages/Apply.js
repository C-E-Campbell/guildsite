import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Apply.module.css';
import Footer from '../components/Footer';

function Apply(props) {
  const [formNum, SetFormNum] = useState(0);
  const [discordID, SetDiscordID] = useState('');
  const [access, SetAccess] = useState('');
  const [mic, SetMic] = useState('');
  const [interests, SetInterests] = useState([]);
  const [crafting, SetCrafting] = useState('');
  const [membership, SetMembership] = useState('');
  const [personality, SetPersonality] = useState('');
  const [exp, SetExp] = useState('');
  const [questions, SetQuestions] = useState('');

  const handleInterests = (value) => {
    const values = interests.slice();
    values.push(value);
    SetInterests(values);
  };

  return (
    <>
      <div className={styles.container}>
        <form>
          <div className={styles.formBox}>
            <label className={styles.label}>Discord ID (include #0000)</label>
            <input
              value={discordID}
              onChange={(e) => {
                SetDiscordID(e.target.value);
              }}
              className={styles.input}
              placeholder="ie #1234 GamerMan"
            />
            <p className={styles.label}>
              Though not required - Do you own or will you be purchasing Alpha
              or Beta access or Streaming when the NDA is lifted for Guild-Mates
              to learn with you?
            </p>

            <select
              onChange={(e) => {
                SetAccess(e.target.value);
              }}
              className={styles.select}
              id="access"
              name="access"
            >
              <option ame={styles.option} value="Have Alpha 1 access already">
                Have Alpha 1 access already
              </option>
              <option
                className={styles.option}
                value="Have / Will purchase alpha 2 access"
              >
                Have / Will purchase Alpha 2 access
              </option>
              <option
                className={styles.option}
                value="Have / Will be purchasing Beta access"
              >
                Have / Will purchase Beta access
              </option>

              <option
                className={styles.option}
                value="Will be streaming or can stream Alpha 1, Alpha 2, or Beta"
              >
                Will be streaming or can stream Alpha 1, Alpha 2, or Beta
              </option>
            </select>
          </div>
          <p className={styles.label}>
            Do you have a functional mic for Discord use?
          </p>
          <div className={styles.checkboxContainer}>
            <input
              onChange={() => {
                SetMic('I have a mic');
              }}
              className={styles.checkbox}
              type="checkbox"
              id="micyes"
              name="mic"
            />
            <label className={styles.p2} for="micyes">
              Yes
            </label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              onChange={() => {
                SetMic('I have DO NOT mic');
              }}
              className={styles.checkbox}
              type="checkbox"
              id="micno"
              name="mic"
            />
            <label className={styles.p2} for="micno">
              No
            </label>
          </div>
          <p className={styles.label}>
            What activities are you most interested in?
          </p>
          <div className={styles.checkboxContainer}>
            <input
              onChange={() => {
                handleInterests('Artisan / Crafting');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="artisan"
              name="interests"
            />
            <label ame={styles.p2} for="artisan">
              Artisan/Crafting
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('PvE & Exploration');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="exploration"
              name="interests"
            />
            <label ame={styles.p2} for="exploration">
              PvE & Exploration
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('PvE - Instanced Content / Dungeons');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="instanced"
              name="interests"
            />
            <label ame={styles.p2} for="instanced">
              PvE - Instanced Content / Dungeons
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('PvX - Open World Dungeons / Bosses');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="openworld"
              name="interests"
            />
            <label ame={styles.p2} for="openworld">
              PvX - Open World Dungeons / Bosses
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('Raiding - 16 & 40-man content');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="raiding"
              name="interests"
            />
            <label ame={styles.p2} for="raiding">
              Raiding - 16 & 40-man content
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('Caravan Escort Activites');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="caravan"
              name="interests"
            />
            <label ame={styles.p2} for="caravan">
              Caravan Escort Activites
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('Homestead / RP');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="homestead"
              name="interests"
            />
            <label ame={styles.p2} for="homestead">
              Homestead / RP
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('Siege Attack / Defense');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="siege"
              name="interests"
            />
            <label ame={styles.p2} for="siege">
              Siege Attack / Defense
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('Bounty Hunting');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="bounty"
              name="interests"
            />
            <label ame={styles.p2} for="bounty">
              Bounty Hunting
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('Active PvP');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="pvp"
              name="interests"
            />
            <label ame={styles.p2} for="pvp">
              Active PvP
            </label>
          </div>
          <div ame={styles.checkboxContainer}>
            <input
              onChange={(e) => {
                handleInterests('Build & Class research and testing');
              }}
              ame={styles.checkbox}
              type="checkbox"
              id="research"
              name="interests"
            />
            <label ame={styles.p2} for="research">
              Build & Class research and testing
            </label>
          </div>
          <p ame={styles.label}>
            If you master a craft, which branch would you specialize in? If you
            can elongate on your choice or passion, please do - We'd love to
            hear all about it. No, seriously - the wait for this game is an
            illness...
          </p>
          <label ame={styles.p2} for="craft"></label>
          <textarea
            onChange={(e) => SetCrafting(e.target.value)}
            value={crafting}
            ame={styles.input2}
            placeholder="enter text here"
            type="text"
            id="craft"
            name="craft"
            cols="100"
            rows="100"
          />
          <p ame={styles.label}>
            Please detail prior experience or other talents / skills you can
            contribute to the Guild
          </p>
          <label ame={styles.p2} for="extra"></label>
          <textarea
            onChange={(e) => SetExp(e.target.value)}
            value={exp}
            ame={styles.input2}
            placeholder="enter text here"
            type="text"
            id="extra"
            name="extra"
            cols="100"
            rows="100"
          />
          <p ame={styles.label}>Any questions or suggestions for us?</p>
          <label ame={styles.p2} for="questions"></label>
          <textarea
            onChange={(e) => SetQuestions(e.target.value)}
            value={questions}
            ame={styles.input2}
            placeholder="enter text here"
            type="text"
            id="questions"
            name="questions"
            cols="100"
            rows="100"
          />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default withRouter(Apply);
