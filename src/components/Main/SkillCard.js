import React from 'react';
import '../../styles/Main/SkillCard.css';

const SkillCard = ({ icon, name }) => {
    return (
      <div className='skill_card'>
        <i className={icon} />
        <p>{name}</p>
      </div>
    )
};

export default SkillCard;