import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <div id='App'>
        <Nav />
        <Switch>
          <Route exact path='/'></Route>
          <Route exact path='/about'></Route>
          <Route exact path='/contact'></Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;