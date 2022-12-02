import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TodoItem = (props) => {
    const [editTodo, setEditTodo] = useState(false)
    const [editTodoText, setEditTodoText] = useState(props.todo)

    useEffect(() => {
        if(editTodo) {
            const inputEdit = document.querySelector(`li:nth-child(${props.id + 1}) .todo-text-edit`)
            inputEdit.focus()
        }   
    }, [editTodo])

    const isChecked = (e) => {
        if(e.target.checked)
        document.querySelector(`li:nth-child(${props.id + 1}) .todo-text`).style.textDecoration = "line-through"
        else
        document.querySelector(`li:nth-child(${props.id + 1}) .todo-text`).style.textDecoration = "none"
    }
    
    const handleEdit = () => {
        editTodo ? setEditTodo(false) : setEditTodo(true)
    }

    let todoText
    let buttons

    if(editTodo) {
        todoText = <input className="todo-text-edit" type="text" defaultValue={props.todo}></input>

        buttons = <div className="buttons">
                        <button onClick={handleEdit}><span className="material-symbols-outlined">done</span></button>
                        <button onClick={handleEdit}><span className="material-symbols-outlined">close</span></button>
                </div>
    } else {
        todoText = <span className="todo-text">{props.todo}</span>;

        buttons = <div className="buttons">
                    <button onClick={handleEdit}><span className="material-symbols-outlined">edit</span></button>
                    <button onClick={() => props.deleteTodo(props.id)}><span className="material-symbols-outlined">delete</span></button>
                </div>
    }

    return (
        <li className="todo-item">
            <div className="todo-item-container">
                <div className="text">
                    <input onChange={isChecked} type="checkbox"/>
                    {todoText}
                </div>
                {buttons}
            </div>
        </li>
    )
}

export default TodoItem