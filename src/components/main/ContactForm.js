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
                <div className='form_field'>
                    <label htmlFor='full-name'>
                        Full Name
                    </label>
                    <input
                        id="full-name"
                        type="text"
                        name="name"
                        placeholder='Full Name'
                    />
                    <ValidationError
                        prefix="Fullname"
                        field="full-name"
                        errors={state.errors}
                    />
                </div>
                <div className='form_field'>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='Email Address'
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className='form_field'>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Message...'
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default ContactForm;