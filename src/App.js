import React from 'react';
import Landing from './pages/landing';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Apply from './pages/newForm';
import FAQ from './pages/FAQ';
import PreSite from './pages/PreSiteVideo';
import Thanks from './pages/Thanks';
import Login from './pages/Login';
import FaqMain from './pages/FaqMain';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PreSite />
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
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
