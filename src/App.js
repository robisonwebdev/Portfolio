import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/App.css';

const App = () => {
    return (
      <div id='App'>
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
};

export default App;
