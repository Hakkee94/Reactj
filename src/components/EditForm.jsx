import React, {useContext, useState, useRef} from 'react';
import {Input} from 'antd';
import {MyContext} from "../App";
import './EditFormStyle.css'



const {TextArea} = Input;

const EditForm = () => {
    const {noteList, activeNote, changeNote, setIsEditForm, isAddForm, setIsAddForm, addNoteToList} = useContext(MyContext)
    const note = noteList[activeNote]
    const [newNoteText, setNewNoteText] = useState('')
    const [files, setFiles] = useState([])
    const [time, setTime] = useState(new Date().toLocaleDateString())

    console.log(files)
    const fileInputRef = useRef(null);

    function changeFile() {
        const file = fileInputRef.current.files;
        console.log(file)
        for (let i = 0; i < file.length; i++) {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                console.log(event.target)
                setFiles((prev) => {
                    return [...prev, {name: file[i].name, file: event.target.result}]
                })
            });
            reader.readAsDataURL(file[i]);
        }
    }

    return (
        <div className='file-drop'>
            <input
                className='datetime-local'
                type='datetime-local'
                onChange={(event) => setTime(event.target.value)}
            />
            <input
                multiple
                ref={fileInputRef}
                type="file"
                onChange={changeFile}
            />
            <label>
                Выполнить задачу
                <input onChange={(event) => {
                    const newNote = {...note, files, time, isDone: event.target.checked}
                    changeNote({id: activeNote, ...newNote})
                }} type='checkbox'/>
            </label>
            <TextArea
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        if (isAddForm) {
                            addNoteToList({time: time, text: newNoteText, files, isDone: false})
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
                        const newNote = {...note, text: event.target.value, files, time}
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