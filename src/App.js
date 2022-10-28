import './App.css';
import Header from "./components/Header";
import Workspace from "./components/Workspace";
import React, {useState} from "react";
import ConfirmModal from "./components/ConfirmModal";

const defaultValue = {editStatus: false, isOpenDeleteModal: false}
export const MyContext = React.createContext(null);

const listMock = [
    {text: 'Новая заметка', time: '12:17', textInfo: 'No additional text'},
    {text: 'Шмот', time: '12:16', textInfo: 'Фронтенд'},
    {text: 'https://webapp.diawi...', time: '24.06.2019', textInfo: 'No additional...'},
    {text: 'РАБОТА', time: '03.01.2019', textInfo: 'Парсинг про...'},
    {text: 'frevis/f04x[RG_QQyS...', time: '07.12.2018', textInfo: 'Демо Биржа...'},
]

function App() {
    const [noteList, setNoteList] = useState(listMock)
    const [isEditForm, setIsEditForm] = useState(false)
    const [isRemoveModal, setIsRemoveModal] = useState(false)
    const [activeNote, setActiveNote] = useState(0)
    const [search, setSearch] = useState('')
    const searchedList = search ? noteList.filter(f => f.text.includes(search)) : noteList
    const [isAddForm, setIsAddForm] = useState(false)


    return (
        <MyContext.Provider value={{
            editStatus: isEditForm,
            isOpenDeleteModal: isRemoveModal,
            setIsEditForm: () => setIsEditForm(prev => !prev),
            setIsRemoveModal: () => setIsRemoveModal(prev => !prev),
            noteList: searchedList,
            addNoteToList: (newNote) => setNoteList(prev => [...prev, newNote]),
            removeNoteFromList: () => setNoteList(prev => prev.filter((_,n) => activeNote !== n)),
            changeNote: ({id, ...editedNote}) => setNoteList(prev => prev.map((item, key) => key === id ? editedNote : item)),
            setActiveNote: (number) => setActiveNote(number),
            activeNote,
            setSearch,
            isAddForm,
            setIsAddForm: () => setIsAddForm(prev => !prev)
        }}>
            <div className="App">
                <Header/>
                <Workspace/>
                <ConfirmModal/>
            </div>
        </MyContext.Provider>
    );
}

export default App;
