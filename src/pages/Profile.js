import React from 'react';
import styles from '../styles/Profile.module.css';
import { Field, Form, Formik } from 'formik';
import Axios from 'axios';
export default function Profile(props) {
  return (
    <Formik
      initialValues={{
        name: '',
        race: '',
        mainClass: '',
        mainWeapon: '',
        artisan: '',
      }}
      onSubmit={async (values, { resetForm }) => {
        Axios.post('/api/v1/auth/demographic', { ...values }).then(
          (data) => props.details(data),
          resetForm({})
        );
      }}
    >
      {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (
        <Form className={styles.form}>
          <label className={styles.label} htmlFor='name'>
            Character Name
          </label>
          <Field
            placeholder='Enter character name'
            className={styles.input}
            id='name'
            name='name'
          />
          <label className={styles.label} htmlFor='race'>
            Race
          </label>
          <Field
            className={styles.field}
            component='select'
            id='race'
            name='race'
            multiple={false}
          >
            <option default={true} className={styles.option} value='none'>
              Choose a race
            </option>
            <option className={styles.option} value='kaelar'>
              Kaelar
            </option>
            <option className={styles.option} value='vaelune'>
              Vaelune
            </option>
            <option className={styles.option} value='dunir'>
              Dunir
            </option>
            <option className={styles.option} value='nikua'>
              Nikua
            </option>
            <option className={styles.option} value='renkai'>
              Ren'Kai
            </option>
            <option className={styles.option} value='vek'>
              Vek
            </option>
            <option className={styles.option} value='empyrean'>
              Empyrean
            </option>
            <option className={styles.option} value='pyrai'>
              Py'Rai
            </option>
            <option className={styles.option} value='tulnar'>
              Tulnar
            </option>
          </Field>

          <label className={styles.label} htmlFor='mainClass'>
            Class
          </label>
          <Field
            className={styles.field}
            component='select'
            id='mainClass'
            name='mainClass'
            multiple={false}
          >
            <option default={true} className={styles.option} value='none'>
              Choose a class
            </option>
            <option className={styles.option} value='Minstrel'>
              Minstrel
            </option>
            <option className={styles.option} value='Soul Weaver'>
              Soul Weaver
            </option>
            <option className={styles.option} value='Tellsword'>
              Tellsword
            </option>
            <option className={styles.option} value='Magician'>
              Magician
            </option>
            <option className={styles.option} value='Song Warden'>
              Song Warden
            </option>
            <option className={styles.option} value='Trickster'>
              Trickster
            </option>
            <option className={styles.option} value='Song Caller'>
              Song Caller
            </option>
            <option className={styles.option} value='Siren'>
              Siren
            </option>
            <option className={styles.option} value='Scryer'>
              Scryer
            </option>
            <option className={styles.option} value='High Priest'>
              High Priest
            </option>
            <option className={styles.option} value='Templar'>
              Templar
            </option>
            <option className={styles.option} value='Oracle'>
              Oracle
            </option>
            <option className={styles.option} value='Protector'>
              Protector
            </option>
            <option className={styles.option} value='Shadow Disciple'>
              Shadow Disciple
            </option>
            <option className={styles.option} value='Shaman'>
              Shaman
            </option>
            <option className={styles.option} value='Apostle'>
              Apostle
            </option>
            <option className={styles.option} value='Bladedancer'>
              Bladedancer
            </option>
            <option className={styles.option} value='Highsword'>
              Highsword
            </option>
            <option className={styles.option} value='Weapon Master'>
              Weapon Master
            </option>
            <option className={styles.option} value='Spellsword'>
              Spellsword
            </option>
            <option className={styles.option} value='Hunter'>
              Hunter
            </option>
            <option className={styles.option} value='Shadowblade'>
              Shadowblade
            </option>
            <option className={styles.option} value='Bladecaller'>
              Bladecaller
            </option>
            <option className={styles.option} value='Dreadnought'>
              Dreadnought
            </option>
            <option className={styles.option} value='Sorcerer'>
              Sorcerer
            </option>
            <option className={styles.option} value='Acolyte'>
              Acolyte
            </option>
            <option className={styles.option} value='Battle Mage'>
              Battle Mage
            </option>
            <option className={styles.option} value='Archwizard'>
              Archwizard
            </option>
            <option className={styles.option} value='Spellhunter'>
              Spellhunter
            </option>
            <option className={styles.option} value='Shadow Caster'>
              Shadow Caster
            </option>
            <option className={styles.option} value='Warlock'>
              Warlock
            </option>
            <option className={styles.option} value='Spellstone'>
              Spellstone
            </option>
            <option className={styles.option} value='Bowsinger'>
              Bowsinger
            </option>
            <option className={styles.option} value='Soulbow'>
              Soulbow
            </option>
            <option className={styles.option} value='Strider'>
              Strider
            </option>
            <option className={styles.option} value='Scion'>
              Scion
            </option>
            <option className={styles.option} value='Hawkeye'>
              Hawkeye
            </option>
            <option className={styles.option} value='Scout'>
              Scout
            </option>
            <option className={styles.option} value='Falconer'>
              Falconer
            </option>
            <option className={styles.option} value='Sentinel'>
              Sentinel
            </option>
            <option className={styles.option} value='Charlatan'>
              Charlatan
            </option>
            <option className={styles.option} value='Cultist'>
              Cultist
            </option>
            <option className={styles.option} value='Duelist'>
              Duelist
            </option>
            <option className={styles.option} value='Nightspell'>
              Nightspell
            </option>
            <option className={styles.option} value='Predator'>
              Predator
            </option>
            <option className={styles.option} value='Assassin'>
              Assassin
            </option>
            <option className={styles.option} value='Shadow Lord'>
              Shadow Lord
            </option>
            <option className={styles.option} value='Shadow Guardian'>
              Shadow Guardian
            </option>
            <option className={styles.option} value='Enchanter'>
              Enchanter
            </option>
            <option className={styles.option} value='Necromancer'>
              Necromancer
            </option>
            <option className={styles.option} value='Wild Blade'>
              Wild Blade
            </option>
            <option className={styles.option} value='Spellmancer'>
              Spellmancer
            </option>
            <option className={styles.option} value='Beastmaster'>
              Beastmaster
            </option>
            <option className={styles.option} value='Shadowmancer'>
              Shadowmancer
            </option>
            <option className={styles.option} value='Conjurer'>
              Conjurer
            </option>
            <option className={styles.option} value='Brood Warden'>
              Brood Warden
            </option>
            <option className={styles.option} value='Argent'>
              Argent
            </option>
            <option className={styles.option} value='Paladin'>
              Paladin
            </option>
            <option className={styles.option} value='Knight'>
              Knight
            </option>
            <option className={styles.option} value='Spellshield'>
              Spellshield
            </option>
            <option className={styles.option} value='Warden'>
              Warden
            </option>
            <option className={styles.option} value='Nightshield'>
              Nightshield
            </option>
            <option className={styles.option} value='Keeper'>
              Keeper
            </option>
            <option className={styles.option} value='Guardian'>
              Guardian
            </option>
          </Field>

          <label className={styles.label} htmlFor='mainWeapon'>
            Main Weapon
          </label>
          <Field
            className={styles.field}
            component='select'
            id='mainWeapon'
            name='mainWeapon'
            multiple={false}
          >
            <option default={true} className={styles.option} value='none'>
              Choose a weapon
            </option>
            <option className={styles.option} value='axe'>
              Axe
            </option>
            <option className={styles.option} value='bow'>
              Bow
            </option>
            <option className={styles.option} value='club'>
              Club
            </option>
            <option className={styles.option} value='crossbow'>
              Crossbow
            </option>
            <option className={styles.option} value='dagger'>
              Dagger
            </option>
            <option className={styles.option} value='hammer'>
              Hammer
            </option>
            <option className={styles.option} value='lance'>
              Lance
            </option>
            <option className={styles.option} value='mace'>
              Mace
            </option>
            <option className={styles.option} value='orb'>
              Orb
            </option>
            <option className={styles.option} value='polearms/halberds'>
              Polearms/Halberds
            </option>
            <option className={styles.option} value='launcher'>
              Potion Launcher
            </option>
            <option className={styles.option} value='scepter'>
              Scepter
            </option>
            <option className={styles.option} value='spear'>
              Spear
            </option>
            <option className={styles.option} value='spellbook'>
              Spellbook
            </option>
            <option className={styles.option} value='staff'>
              Staff
            </option>
            <option className={styles.option} value='sword'>
              Sword/Rapier
            </option>
            <option className={styles.option} value='wand'>
              Wand
            </option>
          </Field>

          <label className={styles.label} htmlFor='artisan'>
            Artisan Preference
          </label>
          <Field
            component='select'
            id='artisan'
            name='artisan'
            multiple={false}
            className={styles.field}
          >
            <option default={true} className={styles.option} value='none'>
              Choose an artisan path
            </option>
            <option className={styles.option} value='gatherer'>
              Gatherer
            </option>
            <option className={styles.option} value='processor'>
              Processor
            </option>
            <option className={styles.option} value='crafter'>
              Crafter
            </option>
          </Field>
          <button className={styles.button} type='submit'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
