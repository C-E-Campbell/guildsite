import React, { useState } from 'react';
import Landing from './pages/landing';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Apply from './pages/newForm';
import PreSite from './pages/PreSiteVideo';
import Thanks from './pages/Thanks';
import Login from './pages/Login';
import FaqMain from './pages/FaqMain';
import Requirements from './pages/RequirementsFaq';
import Guild_Ambition from './pages/GuildAmbition';
import Factions from './pages/Factions';
import Plans from './pages/Plans';
import Raids from './pages/Raiding';
import Node_Ambition from './pages/NodeAmbition';
import Internal from './pages/Internal';

function App() {
  const [isLogged, SetIsLogged] = useState(false);

  const checkLogged = () => {
    SetIsLogged(true);
  };

  const signOut = () => {
    SetIsLogged(false);
  };
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <PreSite />
        </Route>
        <Route exact path='/main'>
          <Landing />
        </Route>
        <Route exact path='/apply'>
          <Nav />
          <Apply />
        </Route>
        <Route exact path='/faq'>
          <Nav />
          <FaqMain />
        </Route>
        <Route exact path='/thanks'>
          <Nav />
          <Thanks />
        </Route>
        <Route exact path='/login'>
          <Nav />
          <Login login={checkLogged} />
        </Route>
        <Route exact path='/requirements'>
          <Nav />
          <Requirements />
        </Route>
        <Route exact path='/guild_ambition'>
          <Nav />
          <Guild_Ambition />
        </Route>
        <Route exact path='/factions'>
          <Nav />
          <Factions />
        </Route>
        <Route exact path='/raiding'>
          <Nav />
          <Raids />
        </Route>
        <Route exact path='/node_ambition'>
          <Nav />
          <Node_Ambition />
        </Route>
        <Route exact path='/plans'>
          <Nav />
          <Plans />
        </Route>
        <Route exact path='/internal'>
          {isLogged ? <Internal signout={signOut} /> : <Redirect to='/main' />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
