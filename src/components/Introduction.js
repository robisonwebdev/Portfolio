import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import myPhoto from '../pictures/myPhoto.jpeg';

const Introduction = () => {
    return (
        <div id='introduction'>
            <div id='introLeft'>
                <h1>Welcome, I'm David</h1>
                <p>Some text about me here</p>
                <Link to='/projects'><Button text='My Work' /></Link>
            </div>
            <div id='introRight'>
                <img src={myPhoto} />
            </div>
        </div>
    );
}

export default Introduction