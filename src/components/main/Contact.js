import React from 'react';
import ContactForm from './ContactForm';
import '../../styles/Main/Contact.css';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h1>Contact</h1>
            <ContactForm />
        </section>
    );
};

export default Contact;
