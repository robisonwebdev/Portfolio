import React from 'react';

const SkillCard = ({ icon, name }) => {
    return (
      <div className='skill_card'>
        <i className={icon} />
        <h4>{name}</h4>
      </div>
    )
};

export default SkillCard;