import React, {useContext} from 'react';
import HeaderIcon from "./HeaderIcon";
import './Header.css'
import * as imgs from '../img/index.js'
import SearchBox from "./SearchBox";
import {MenuOutlined, DeleteFilled, EditFilled, AppstoreFilled, FileAddOutlined, InsertRowLeftOutlined,
    InsertRowRightOutlined, LockOutlined, TableOutlined, CheckOutlined, MailOutlined, UserAddOutlined, ShareAltOutlined, PlusCircleOutlined}
    from "@ant-design/icons";
import {MyContext} from "../App";


const Header = () => {
    const value = useContext(MyContext)
    const {setIsRemoveModal, setIsEditForm, setIsAddForm} = value


    return (
        <header>
            <div className='interact'>
                <div className='close'></div>
                <div className='hide'></div>
                <div className='expand'></div>
            </div>

            <div className='header-interact'>
                <div className='icons'>
                    {/*<MenuOutlined className='icon'/>*/}
                    {/*<AppstoreFilled className='icon'/>*/}
                    {/*<InsertRowLeftOutlined className='icon'/>*/}
                    {/*<InsertRowRightOutlined className='icon'/>*/}
                    <DeleteFilled onClick={setIsRemoveModal} className='icon'/>
                    <EditFilled onClick={setIsEditForm} className='icon'/>
                    {/*<LockOutlined className='icon'/>*/}
                    {/*<TableOutlined className='icon'/>*/}
                    {/*<CheckOutlined className='icon'/>*/}
                    <PlusCircleOutlined onClick={setIsAddForm} className='icon'/>
                    <FileAddOutlined className='icon'/>

                </div>

                {/*<div className='icons'>*/}
                {/*    <MailOutlined className='icon'/>*/}
                {/*    <UserAddOutlined className='icon'/>*/}
                {/*    <ShareAltOutlined className='icon'/>*/}
                {/*</div>*/}
            </div>

            <SearchBox/>

        </header>
    );
};

export default Header;