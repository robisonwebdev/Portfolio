import React from 'react';
import Button from './Button';

const Introduction = () => {
    return (
        <div id='introduction'>
            <div id='introLeft'>
                <h1>Welcome, I'm David</h1>
                <p>Some text about me here</p>
                <Button text='My Work' />
            </div>
            <div id='introRight'></div>
        </div>
    );
}

export default Introduction