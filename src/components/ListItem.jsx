import React from 'react';
import './ListItem.css'
import classNames from "classnames";

/**
 * Represents the todo list
 * @param {string} text - Текст задачи
 * @param {string} time - Время
 * @param {string} textInfo - Дополнительная информация о задаче
 * @param {array} files - прикрепленные файлы
 * @param {boolean} isDone - Выполнена задача или нет, по умолчанию не выполнена
 * @param {function} checkNote - Функция определения активной задачи на данный момент
 */

const ListItem = ({text, time, textInfo, checkNote, files, isDone}) => {
    const currentDate = Date.now()
    const estimatedDate = +new Date(time)
    const classes = classNames({
        'list-item': true,
        'time-is-up': currentDate > estimatedDate,
        'is-done': isDone
    })
    return (
        <div onClick={checkNote} className={classes}>
            <h2>{text}</h2>
            <div className='list-item-info'>
                <span className='time'>{time}</span>
                <span className='text-info'>{textInfo}</span>
                <span className='file-list'>{files.map((file) => {
                    return <span key={file.name}>
                        {file.name}
                    </span>
                })}</span>
            </div>
        </div>
    );
};

export default ListItem;