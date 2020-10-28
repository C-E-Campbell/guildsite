import React, { useState, Suspense, lazy } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Apply from './pages/newForm';

import Thanks from './pages/Thanks';
import Login from './pages/Login';
import FaqMain from './pages/FaqMain';
import Requirements from './pages/RequirementsFaq';
import Guild_Ambition from './pages/GuildAmbition';
import Factions from './pages/Factions';
import Plans from './pages/Plans';
import Raids from './pages/Raiding';

import Internal from './pages/Internal';
const Presite = lazy(() => import('./pages/PreSiteVideo.js'));
const Landing = lazy(() => import('./pages/landing'));
const Node_Ambition = lazy(() => import('./pages/NodeAmbition'));
function App() {
  const [isLogged, SetIsLogged] = useState(false);
  const [email, SetEmail] = useState('');

  const checkLogged = () => {
    SetIsLogged(true);
  };

  const setUserEmail = (email) => {
    SetEmail(email);
  };

  const signOut = () => {
    SetIsLogged(false);
  };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Presite />
          </Route>
          <Route exact path="/main">
            <Landing />
          </Route>
          <Route exact path="/apply">
            <Nav />
            <Apply />
          </Route>
          <Route exact path="/faq">
            <Nav />
            <FaqMain />
          </Route>
          <Route exact path="/thanks">
            <Nav />
            <Thanks />
          </Route>
          <Route exact path="/login">
            <Nav />
            <Login email={setUserEmail} login={checkLogged} />
          </Route>
          <Route exact path="/requirements">
            <Nav />
            <Requirements />
          </Route>
          <Route exact path="/guild_ambition">
            <Nav />
            <Guild_Ambition />
          </Route>
          <Route exact path="/factions">
            <Nav />
            <Factions />
          </Route>
          <Route exact path="/raiding">
            <Nav />
            <Raids />
          </Route>
          <Route exact path="/node_ambition">
            <Nav />
            <Node_Ambition />
          </Route>
          <Route exact path="/plans">
            <Nav />
            <Plans />
          </Route>
          <Route exact path="/internal">
            {isLogged ? (
              <Internal email={email} signout={signOut} />
            ) : (
              <Redirect to="/main" />
            )}
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
