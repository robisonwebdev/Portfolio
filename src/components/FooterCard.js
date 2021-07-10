import React from 'react';

const FooterCard = ({ iconAddess, iconClass }) => {
    return (
        <div className='footerCard'>
            <a href={iconAddess} target='_blank' rel='noreferrer'><i className={iconClass}></i></a>
        </div>
    );
}

export default FooterCard;