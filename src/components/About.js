import React from 'react';
import myPhoto from '../pictures/myPhoto.jpeg';
import ContactLink from './ContactLink'
import '../styles/About.css';

const About = () => {
    return (
        <div id='about'>
            <h1>About Me</h1>
            <div id='aboutMe'>
                <img src={myPhoto} alt='David Robison' />
                <div id='myInfo'>
                    <div id='myStory'>
                        <p>Dolor ut aliquip ex ipsum proident ipsum non ad velit veniam voluptate amet nisi. Excepteur quis amet dolore duis id et et pariatur ex qui pariatur commodo dolore. Excepteur nulla ea reprehenderit nostrud excepteur incididunt est quis sunt excepteur velit nisi veniam.</p>
                        <p>Exercitation exercitation exercitation officia magna dolore cupidatat nulla. Mollit sunt irure proident laborum et dolore dolore elit nisi enim commodo enim. Ex officia in id veniam id enim irure tempor do anim occaecat reprehenderit minim. Irure sit esse sunt dolore consectetur ad dolore culpa minim cillum duis qui sint cillum. Laboris ad anim consequat esse aliquip non incididunt officia velit eu aliqua excepteur. Occaecat consequat aliquip do ipsum est cupidatat ullamco nisi esse ad esse veniam. Consectetur nulla aliqua nostrud excepteur cupidatat amet sunt ut irure laborum cupidatat excepteur cupidatat.</p>
                        <p>Veniam incididunt voluptate eiusmod ullamco laboris aliqua esse cillum et deserunt minim duis. Excepteur non quis commodo amet sint ut. Nostrud deserunt culpa non aliqua tempor deserunt sunt nisi pariatur sunt commodo et. Excepteur fugiat laboris aliqua labore proident dolore nulla eiusmod. Tempor ut velit enim cillum.</p>
                    </div>
                    <div id='mySocialLinks'>
                        <ContactLink address='https://github.com/robisonwebdev' iconClass='lab la-github' />
                        <ContactLink address='https://www.linkedin.com/in/davidrulonrobison/' iconClass='lab la-linkedin' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;