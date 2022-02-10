import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Welcome from './Welcome';
import '../../styles/Main/Main.css';

const Main = () => {
    return (
        <main className='main'>
            <Welcome />
            <About />
            <Projects />
            <Contact />
        </main>
    );
};

export default Main;
