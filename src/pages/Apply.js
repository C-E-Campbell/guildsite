import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Apply.module.css';

function Apply(props) {
  const [formNum, SetFormNum] = useState(-1);
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

  const renderForm = (num) => {
    switch (num) {
      case -1:
        return (
          <div className={styles.formContainer}>
            <div className={styles.formBox}>
              <h2 className={styles.h2}>
                Apostles of the Abyss Guild Application
              </h2>

              <p className={styles.p}>
                Join our Discord! :
                <a
                  className={styles.a}
                  href="https://discord.gg/pJpFGRn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Link
                </a>
              </p>
              <p className={styles.p}>
                Welcome to the Apostles, Branded one.
                <br />
                We are a dedicated community with the goal of creating and
                maintaining an ecosystem of players working to make our mark and
                synergize with each other for the good of all.
              </p>
              <p className={styles.p}>
                We will have systems and interior factions within our Guild such
                as a group of dedicated Bounty Hunters that will work towards
                keeping our areas of influence safe- helping adventures local to
                us feel safer while traveling.
                <br />
                <br />
                We will organize and have regular protection assistance to as
                many caravans as we can assist within our realm.
                <br />
                <br />
                We have constructed and are still tweaking our Discord's setup
                in preparation for all that is to come.
              </p>

              <button
                className={styles.button}
                onClick={() => SetFormNum(formNum + 1)}
              >
                Apply Now
              </button>
            </div>
          </div>
        );
      case 0:
        return (
          <div className={styles.formContainer}>
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
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
              <p className={styles.label}>
                Though not required - Do you own or will you be purchasing Alpha
                or Beta access or Streaming when the NDA is lifted for
                Guild-Mates to learn with you?
              </p>

              <select
                onChange={(e) => {
                  SetAccess(e.target.value);
                }}
                className={styles.select}
                id="access"
                name="access"
              >
                <option
                  className={styles.option}
                  value="Have Alpha 1 access already"
                >
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
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
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

              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
              <p className={styles.label}>
                What activities are you most interested in?
              </p>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={() => {
                    handleInterests('Artisan / Crafting');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="artisan"
                  name="interests"
                />
                <label className={styles.p2} for="artisan">
                  Artisan/Crafting
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('PvE & Exploration');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="exploration"
                  name="interests"
                />
                <label className={styles.p2} for="exploration">
                  PvE & Exploration
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('PvE - Instanced Content / Dungeons');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="instanced"
                  name="interests"
                />
                <label className={styles.p2} for="instanced">
                  PvE - Instanced Content / Dungeons
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('PvX - Open World Dungeons / Bosses');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="openworld"
                  name="interests"
                />
                <label className={styles.p2} for="openworld">
                  PvX - Open World Dungeons / Bosses
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('Raiding - 16 & 40-man content');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="raiding"
                  name="interests"
                />
                <label className={styles.p2} for="raiding">
                  Raiding - 16 & 40-man content
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('Caravan Escort Activites');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="caravan"
                  name="interests"
                />
                <label className={styles.p2} for="caravan">
                  Caravan Escort Activites
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('Homestead / RP');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="homestead"
                  name="interests"
                />
                <label className={styles.p2} for="homestead">
                  Homestead / RP
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('Siege Attack / Defense');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="siege"
                  name="interests"
                />
                <label className={styles.p2} for="siege">
                  Siege Attack / Defense
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('Bounty Hunting');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="bounty"
                  name="interests"
                />
                <label className={styles.p2} for="bounty">
                  Bounty Hunting
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('Active PvP');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="pvp"
                  name="interests"
                />
                <label className={styles.p2} for="pvp">
                  Active PvP
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={(e) => {
                    handleInterests('Build & Class research and testing');
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                  id="research"
                  name="interests"
                />
                <label className={styles.p2} for="research">
                  Build & Class research and testing
                </label>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
              <p className={styles.label}>
                If you master a craft, which branch would you specialize in? If
                you can elongate on your choice or passion, please do - We'd
                love to hear all about it. No, seriously - the wait for this
                game is an illness...
              </p>
              <label className={styles.p2} for="craft"></label>
              <textarea
                onChange={(e) => SetCrafting(e.target.value)}
                value={crafting}
                className={styles.input2}
                placeholder="enter text here"
                type="text"
                id="craft"
                name="craft"
                cols="100"
                rows="100"
              />
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
              <p className={styles.label}>
                Are you applying initally as a standard member or do you have
                aspirations of leadership?
              </p>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={() => SetMembership('Standard Membership')}
                  className={styles.checkbox}
                  type="checkbox"
                  id="standard"
                  name="role"
                />
                <label className={styles.p2} for="standard">
                  Standard Membership
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  onChange={() => SetMembership('Leadership Role')}
                  className={styles.checkbox}
                  type="checkbox"
                  id="leader"
                  name="role"
                />
                <label className={styles.p2} for="leader">
                  Leadership Roles or Specialty Functions (officers, mods, etc)
                </label>
              </div>

              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
              <p className={styles.label}>
                What activities are you most interested in?
              </p>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="artisan"
                  name="interests"
                />
                <label className={styles.p2} for="artisan">
                  Artisan/Crafting
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="exploration"
                  name="interests"
                />
                <label className={styles.p2} for="exploration">
                  PvE & Exploration
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="instanced"
                  name="interests"
                />
                <label className={styles.p2} for="instanced">
                  PvE - Instanced Content / Dungeons
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="openworld"
                  name="interests"
                />
                <label className={styles.p2} for="openworld">
                  PvX - Open World Dungeons / Bosses
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="raiding"
                  name="interests"
                />
                <label className={styles.p2} for="raiding">
                  Raiding - 16 & 40-man content
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="caravan" name="interests" />
                <label className={styles.p2} for="caravan">
                  Caravan Escort Activites
                </label>
              </div>

              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="homestead"
                  name="interests"
                />
                <label className={styles.p2} for="homestead">
                  Homestead / RP
                </label>
              </div>

              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="siege"
                  name="interests"
                />
                <label className={styles.p2} for="siege">
                  Siege Attack / Defense
                </label>
              </div>

              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="bounty"
                  name="interests"
                />
                <label className={styles.p2} for="bounty">
                  Bounty Hunting
                </label>
              </div>

              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="pvp"
                  name="interests"
                />
                <label className={styles.p2} for="pvp">
                  Active PvP
                </label>
              </div>

              <div className={styles.checkboxContainer}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="research"
                  name="interests"
                />
                <label className={styles.p2} for="research">
                  Build & Class research and testing
                </label>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
              <p className={styles.label}>
                Please tell us about yourself, your personality, and why you you
                would be a good fit for this role.
              </p>
              <label className={styles.p2} for="personality"></label>
              <textarea
                onChange={(e) => {
                  SetPersonality(e.target.value);
                }}
                value={personality}
                className={styles.input2}
                placeholder="enter text here"
                type="text"
                id="personality"
                name="personality"
                cols="100"
                rows="100"
              />
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
              <p className={styles.label}>
                Please detail prior experience or other talents / skills you can
                contribute to the Guild
              </p>
              <label className={styles.p2} for="extra"></label>
              <textarea
                onChange={(e) => SetExp(e.target.value)}
                value={exp}
                className={styles.input2}
                placeholder="enter text here"
                type="text"
                id="extra"
                name="extra"
                cols="100"
                rows="100"
              />
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className={styles.formContainer} data-aos="fade-in">
            <div className={styles.formBox}>
              <p className={styles.label}>
                Any questions or suggestions for us?
              </p>
              <label className={styles.p2} for="questions"></label>
              <textarea
                onChange={(e) => SetQuestions(e.target.value)}
                value={questions}
                className={styles.input2}
                placeholder="enter text here"
                type="text"
                id="questions"
                name="questions"
                cols="100"
                rows="100"
              />
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => SetFormNum(formNum - 1)}
                >
                  Back
                </button>
                <button
                  className={styles.button}
                  onClick={() => {
                    props.history.push('/thanks');
                  }}
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return <div className={styles.container}>{renderForm(formNum)}</div>;
}

export default withRouter(Apply);
