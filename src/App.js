import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <div id='App'>
        <Nav />
      </div>
    </Router>
  );
}


export default App;