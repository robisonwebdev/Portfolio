import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const IntroContact = () => {
    return (
        <div className='introContact'>
            <div className='leftContact'>
                <h1>Let's Work Together</h1>
                <Link to='/contact'><Button text='Get in Touch' className='introContactBtn' /></Link>
            </div>
            <div className='rightContact'></div>
        </div>
    );
}

export default IntroContact;