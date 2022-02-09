import React from 'react';
import '../../styles/Main/Welcome.css';

const Welcome = () => {
    return (
        <section className='welcome'>
            <div className='welcome_message'>
                <h1>Welcome, I'm <span>David Robison</span>.</h1>
                <h1>I'm a front-end web developer.</h1>
            </div>
            <button>More Information <i className='las la-chevron-down' /></button>
        </section>
    );
};

export default Welcome;
