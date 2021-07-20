import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Introduction = () => {
    return (
        <div id='introduction'>
            <div id='introLeft'>
                <h1>Welcome, I'm David</h1>
                <p>Some text about me here</p>
                <Link to='/projects'><Button text='My Work' /></Link>
            </div>
            <div id='introRight'></div>
        </div>
    );
}

export default Introduction