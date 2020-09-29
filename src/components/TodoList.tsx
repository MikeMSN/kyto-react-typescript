import React from 'react';

type TodoListProps = {
    todos: any[]
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li className="todo">
                        <input type="checkbox"/>
                        <span></span>
                        <i className="materials-icons red-text">delete</i>
                    </li>)
            })}

        </ul>
    )
}