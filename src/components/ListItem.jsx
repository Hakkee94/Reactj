import React from 'react';
import './ListItem.css'

const ListItem = ({text, time, textInfo, checkNote}) => {
    return (
        <div onClick={checkNote} className='list-item'>
            <h2>{text}</h2>
            <div className='list-item-info'>
                <span className='time'>{time}</span>
                <span className='text-info'>{textInfo}</span>
            </div>
        </div>
    );
};

export default ListItem;