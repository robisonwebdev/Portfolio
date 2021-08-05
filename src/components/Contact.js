import React from 'react';
import ContactLink from './ContactLink';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div id='contact'>
            <h1>Get in touch</h1>
            <div id='contactDetails'>
                <p></p>
                <p>Nullam vitae tempus dui, quis ornare dolor. Nulla iaculis enim at urna egestas, id suscipit est rutrum. Pellentesque consectetur ultricies mauris, sit amet lobortis ante sagittis sed.</p>
                <p>You can contact me by my email:<br /> DavidRBRobison@gmail.com</p>
            </div>
            <div id='contactLinks'>
                <ContactLink address='https://github.com/robisonwebdev' iconClass='lab la-github' />
                <ContactLink address='https://www.linkedin.com/in/davidrulonrobison/' iconClass='lab la-linkedin' />
            </div>
        </div>
    );
}

export default Contact;