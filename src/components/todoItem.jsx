import React from "react";

const TodoItem = (props) => {
    const isChecked = (e) => {
        if(e.target.checked)
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through"
        else
        e.target.parentElement.querySelector("span").style.textDecoration = "none"
    }

    return (
        <li className="todo-item">
            <div className="todo-item-container">
                <div className="text">
                    <input onChange={isChecked} type="checkbox"/>
                    <span>{props.todo}</span>
                </div>
                <div className="buttons">
                    <button onClick={() => props.updateTodo(props.id)}><span className="material-symbols-outlined">edit</span></button>
                    <button onClick={() => props.deleteTodo(props.id)}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem