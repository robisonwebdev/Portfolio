import React from 'react';
import About from './About';
import Projects from './Projects';
import Welcome from './Welcome';
import '../../styles/Main/Main.css';

const Main = () => {
    return (
        <main className='main'>
            <Welcome />
            <About />
            <Projects />
        </main>
    );
};

export default Main;
