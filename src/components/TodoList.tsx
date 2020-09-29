import React from 'react';


export const TodoList: React.FC = () => {
    return (
        <ul>
            <li className="todo">
                <input type="checkbox"/>
                <span></span>
                <i className="materials-icons red-text">delete</i>
            </li>
        </ul>
    )
}