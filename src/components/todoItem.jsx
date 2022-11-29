import React from "react";

const TodoItem = (props) => {
    return (
        <li className="todo-item">
            <div className="todo-item-container">
                <div className="text">
                    <input type="checkbox"/>
                    <span>{props.todo}</span>
                </div>
                <div className="buttons">
                    <button><span className="material-symbols-outlined">edit</span></button>
                    <button><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem