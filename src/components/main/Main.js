import React from 'react';
import About from './About';
import Welcome from './Welcome';
import '../../styles/Main/Main.css';

const Main = () => {
    return (
        <main className='main'>
            <Welcome />
            <About />
        </main>
    );
};

export default Main;
