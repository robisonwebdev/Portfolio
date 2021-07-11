import React from 'react';
import '../styles/FooterCard.css';

const FooterCard = ({ iconAddess, iconClass }) => {
    return (
        <div className='footerCard'>
            <a href={iconAddess} target='_blank' rel='noreferrer'><i className={iconClass}></i></a>
        </div>
    );
}

export default FooterCard;