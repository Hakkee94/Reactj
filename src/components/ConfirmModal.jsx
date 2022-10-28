import React, {useContext} from 'react';
import {MyContext} from "../App";
import {Modal} from 'antd';

const ConfirmModal = () => {
    const {isOpenDeleteModal, setIsRemoveModal, removeNoteFromList, setActiveNote} = useContext(MyContext)


    return (
        <div>
            <Modal
                title="Modal"
                open={isOpenDeleteModal}
                onOk={() => {
                    removeNoteFromList()
                    setActiveNote(0)
                    setIsRemoveModal()
                }}
                onCancel={setIsRemoveModal}
                okText="Удалить"
                cancelText="Отменить"
            >
                <p>Уверены, что хотите удалить?</p>

            </Modal>
        </div>
    );
};

export default ConfirmModal;