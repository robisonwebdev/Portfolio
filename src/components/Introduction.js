import React from 'react';
import Button from './Button';
import myPhoto from '../pictures/myPhoto.jpeg';
import '../styles/Introduction.css';

const Introduction = () => {
    return (
        <div id='introContainer'>
            <div id='introduction'>
                <div id='introLeft'>
                    <h1>Welcome, I'm David</h1>
                    <p>Some text about me here</p>
                    <Button text='My Work' className='introProjectsBtn' />
                </div>
                <div id='introRight'>
                    <img id='introImage' src={myPhoto} />
                </div>
            </div>
        </div>
    );
}

export default Introduction