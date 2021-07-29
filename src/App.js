import React from 'react';
import Nav from './components/Nav';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div id='App'>
      <Nav />
      <Introduction />
      <Footer name='David Robison' date='2021' /> 
    </div>
  );
}

export default App;