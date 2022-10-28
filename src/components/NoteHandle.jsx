import React from 'react';
import {useContext} from "react";
import {MyContext} from "../App";

const NoteHandle = ({date, text}) => {
    const {noteList, activeNote} = useContext(MyContext)
    if (noteList.length === 0) {
        return (
            <div className='work-handle'>
                <div className='note'>
                    <h2>У вас нету записей</h2>
                </div>
            </div>
        )
    }
    const note = noteList[activeNote]

    return (
        <div className='work-handle'>
            <div className='date'>
                <span>{note.time}</span>
            </div>

            <div className='note'>
                <h2>{note.text}</h2>
            </div>
        </div>
    );
};

export default NoteHandle;