import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div id='App'>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Projects />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;