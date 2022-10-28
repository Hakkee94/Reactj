import React, {useContext} from 'react';
import NoteList from "./NoteList";
import NoteHandle from "./NoteHandle";
import './WorkSpace.css'
import { Col, Row } from 'antd';
import {MyContext} from "../App";
import EditForm from "./EditForm";

const Workspace = () => {
    const value = useContext(MyContext)
    return (
        <div className='workspace'>
            <Row>
                <Col
                    span={6}>
                    <NoteList/>
                </Col>
                <Col span={18}>
                    {value.editStatus || value.isAddForm ? <EditForm/> : <NoteHandle date='29 October 2019, 12:17' text='Новая заметка'/>}
                </Col>
            </Row>
        </div>
    );
};

export default Workspace;