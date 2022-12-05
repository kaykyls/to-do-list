import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TodoItem = (props) => {
    const [editTodo, setEditTodo] = useState(false)
    const [editedTodoText, setEditedTodoText] = useState(props.todo)

    useEffect(() => {
        if(editTodo) {
            const inputEdit = document.querySelector(`li:nth-child(${props.id + 1}) .todo-text-edit`)
            inputEdit.focus()
        }   
    }, [editTodo])

    const isChecked = (e) => {
        if(e.target.checked) {
            document.querySelector(`li:nth-child(${props.id + 1}) .todo-text`).style.textDecoration = "line-through"
            props.storageCheckedTodos(props.id, e.target.checked)
        }
        else {
            document.querySelector(`li:nth-child(${props.id + 1}) .todo-text`).style.textDecoration = "none"
            props.storageCheckedTodos(props.id, e.target.checked)
        }
    }
    
    const handleEdit = () => {
        editTodo ? setEditTodo(false) : setEditTodo(true)
    }

    const handleChange = (e) => {
        setEditedTodoText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateTodo(editedTodoText, props.id)
        handleEdit()
    }

    let itemContainer

    if(editTodo) {
        itemContainer = 
        <form onSubmit={handleSubmit} className="todo-item-container">
                <div className="text">
                    <input onChange={isChecked} type="checkbox"/>
                    <input onChange={handleChange} className="todo-text-edit" type="text" defaultValue={editedTodoText}></input>
                </div>
                <div className="buttons">
                        <button><span className="material-symbols-outlined">done</span></button>
                        <button type="button" onClick={handleEdit}><span className="material-symbols-outlined">close</span></button>
                </div>
        </form>
    } else {
        itemContainer = 
        <div className="todo-item-container">
            <div className="text">
                <input onChange={isChecked} type="checkbox"/>
                <span className="todo-text">{props.todo}</span>
            </div>
            <div className="buttons">
                <button onClick={handleEdit}><span className="material-symbols-outlined">edit</span></button>
                <button onClick={() => props.deleteTodo(props.id)}><span className="material-symbols-outlined">delete</span></button>
            </div>
        </div>
    }

    return (
        <li className="todo-item">
            {itemContainer}
        </li>
    )
}

export default TodoItem