import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div id='about'>
            <h1>About Me</h1>
            <div id='aboutMe'>
                <div id='myPicture'></div>
                <div id='myInfo'>
                    <div id='myStory'></div>
                    <div id='mySocialLinks'></div>
                </div>
            </div>
        </div>
    );
}

export default About;