import React from 'react';
import ContactLink from './ContactLink';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div id='contact'>
            <h1>Contact Me</h1>
            <div id='contactDetails'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget lorem leo. Cras lectus elit, semper at urna quis, tincidunt egestas ex.</p>
                <p>Nullam vitae tempus dui, quis ornare dolor. Nulla iaculis enim at urna egestas, id suscipit est rutrum. Pellentesque consectetur ultricies mauris, sit amet lobortis ante sagittis sed.</p>
                <p>My inbox:<br /> DavidRBRobison@gmail.com</p>
            </div>
            <div id='contactLinks'>
                <ContactLink address='https://github.com/robisonwebdev' iconClass='lab la-github' />
                <ContactLink address='https://www.linkedin.com/in/davidrulonrobison/' iconClass='lab la-linkedin' />
            </div>
        </div>
    );
}

export default Contact;