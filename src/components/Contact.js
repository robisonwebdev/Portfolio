import React from 'react';
import Footer from './Footer';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contact Me</h1>
            <div>Contact information componenet here</div>
            <Footer text='Developed by ' name='David Robison' address='https://github.com/robisonwebdev' /> 
        </div>
    );
}

export default Contact;