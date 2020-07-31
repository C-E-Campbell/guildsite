import React from 'react';
import Landing from './pages/landing';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Apply from './pages/Apply';
import FAQ from './pages/FAQ';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/apply">
          <Apply />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
      </Switch>
    </>
  );
}

export default App;
