import React from 'react';
import Navigation from './components/navigation/Navigation';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

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
