import React, {useContext} from 'react';
import ListItem from "./ListItem";
import './NoteList.css'
import {MyContext} from "../App";



const NoteList = () => {
    const {noteList, setActiveNote} = useContext(MyContext)

    return (
        <div className='note-list'>
            {noteList.map((note, key) => <ListItem checkNote={() => setActiveNote(key)} key={note.text + note.time} text={note.text} time={note.time} textInfo={note.textInfo}/>)}
        </div>
    );
};

export default NoteList;