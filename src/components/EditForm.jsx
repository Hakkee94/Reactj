import React, {useContext, useState} from 'react';
import {Input} from 'antd';
import {MyContext} from "../App";

const {TextArea} = Input;

const EditForm = () => {
    const {noteList, activeNote, changeNote, setIsEditForm, isAddForm, setIsAddForm, addNoteToList} = useContext(MyContext)
    const note = noteList[activeNote]
    const [newNoteText, setNewNoteText] = useState('')

    return (
        <div>
            <TextArea
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        if (isAddForm) {
                            addNoteToList({time: new Date().toLocaleTimeString(), text: newNoteText})
                            setIsAddForm()
                        } else {
                            setIsEditForm()
                        }
                    }
                }}
                onChange={(event) => {
                    if (isAddForm) {
                        setNewNoteText(event.target.value)
                    } else {
                        const newNote = {...note, text: event.target.value}
                        changeNote({id: activeNote, ...newNote})
                    }
                }}
                defaultValue={note.text}
                showCount
                maxLength={1000}
                style={{height: 'calc(100vh - 60px)', resize: 'none'}}
                placeholder="disable resize"
            />
        </div>
    );
};

export default EditForm;