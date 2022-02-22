import React from 'react';
import '../../styles/Main/Welcome.css';

const Welcome = () => {
    return (
        <section className='welcome' id='home'>
            <div className='welcome_message'>
                <h1>Welcome, I'm <span>David Robison</span>.</h1>
                <h1>I'm a front-end web developer.</h1>
            </div>
            <a href='#about'>More Information <i className='las la-chevron-down' /></a>
        </section>
    );
};

export default Welcome;
