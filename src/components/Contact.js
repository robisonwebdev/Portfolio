import React from 'react';
import ContactLink from './ContactLink';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div id='contact'>
            <h1>Get in touch</h1>
            <div id='contactDetails'>
                <p>If you have any questions about me, my projects, or just want to chat, please contact me by Email or social links below.</p>
                <p>Thanks for viewing my portfolio!</p>
                <p>Contact me by my email:<br /> DavidRBRobison@gmail.com</p>
            </div>
            <div className='mySocialLinks'>
                <ContactLink address='https://github.com/robisonwebdev' iconClass='lab la-github' />
                <ContactLink address='https://www.linkedin.com/in/davidrulonrobison/' iconClass='lab la-linkedin' />
            </div>
        </div>
    );
}

export default Contact;