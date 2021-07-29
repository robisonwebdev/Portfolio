import React from 'react';
import Nav from './components/Nav';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div id='App'>
      <Nav />
      <Introduction />
      <About />
      <Projects />
      <Footer name='David Robison' date='2021' /> 
    </div>
  );
}

export default App;