import React from 'react';
import PageIntro from './PageIntro';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <PageIntro description='Future text for contact me' title='Contact Me' />
            <div>Contact information componenet here</div>
        </div>
    );
}

export default Contact;