import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div id='App'>
        <Nav />
        <Content />
        <Footer text='Developed by ' name='David Robison' address='https://github.com/robisonwebdev' /> 
      </div>
    </Router>
  );
}

export default App;