import React from 'react';
import Button from './Button';

const IntroContact = () => {
    return (
        <div className='introContact'>
            <div className='leftContact'>
                <h1>Let's Work Together</h1>
                <Button text='Get in Touch' className='introContactBtn' />
            </div>
            <div className='rightContact'></div>
        </div>
    );
}

export default IntroContact;