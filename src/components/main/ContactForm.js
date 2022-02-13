import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../styles/Main/ContactForm.css';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xvolagzn");

    if (state.succeeded) {
        return (
            <>
                <h3>Thank you for getting in touch!</h3>
                <p>I'll be in contact with you as soon as possible.</p>
            </>
        );
    }

    return (
        <section className='contact_form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='full-name'>
                    Full Name
                </label>
                <input
                    id="full-name"
                    type="text"
                    name="name"
                />
                <ValidationError
                    prefix="Fullname"
                    field="full-name"
                    errors={state.errors}
                />
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default ContactForm;