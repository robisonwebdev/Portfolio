import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Content from './components/Content';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div id='App'>
        <Nav />
        <Content />
      </div>
    </Router>
  );
}

export default App;