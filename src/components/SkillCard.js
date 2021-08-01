import React from 'react';

const SkillCard = ({ className, text }) => {
    return (
        <div className='skillCard'>
            <i className={className} />
            <p>{text}</p>
        </div>
    );
}

export default SkillCard;