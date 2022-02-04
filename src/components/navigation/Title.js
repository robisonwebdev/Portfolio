import React from 'react';
import '../../styles/Navigation/Title.css';

const Title = ({ title }) => {
    return (
        <strong className='navigation_title'>
            <a href='#home'>{title}</a>
        </strong>
    );
};

export default Title;
