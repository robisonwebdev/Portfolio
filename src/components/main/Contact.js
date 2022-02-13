import React from 'react';
import ContactForm from './ContactForm';
import '../../styles/Main/Contact.css';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h1>Contact</h1>
            <section className='contact_form'>
                <ContactForm />
            </section>
        </section>
    );
};

export default Contact;
