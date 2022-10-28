import React from 'react';
import './HeaderIcon.css'

const HeaderIcon = ({src}) => {
    return (
        <div className='header-icon'>
            <img src={src}/>
        </div>
    );
};

export default HeaderIcon;