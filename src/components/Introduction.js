import React from 'react';
import '../styles/Introduction.css';

const Introduction = () => {
    return (
        <div id='introduction'>
            <div id="introContainer">
                <div id='introLeft'>
                    <h1>David Robison</h1>
                    <h1>Front-End</h1>
                    <h1>Web Developer</h1>
                </div>
                <div id='introRight'>
                    <i className='las la-laptop-code' />
                </div>
            </div>
        </div>
    );
}

export default Introduction