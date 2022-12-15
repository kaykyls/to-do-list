import React from "react";
import { useState, useRef, useEffect } from "react";

const TodoItem = (props) => {
    const [editTodo, setEditTodo] = useState(false)
    const [editedTodoText, setEditedTodoText] = useState(props.todo)
    const inputRef = useRef(null);

    useEffect(() => {
        if(editTodo) {
            inputRef.current.focus();
        }
    }, [editTodo]);

    console.log(document.querySelector(`.todo-item:nth-child(${props.id}) .text input:nth-child(1)`))

    useEffect(() => {
        if(props.isComplete) {
            // console.log(document.querySelector(`.todo-item:nth-child(${props.id}) .text input:nth-child(1)`))
        } else {
            // document.querySelector(`.todo-item:nth-child(${props.id}) .text input:nth-child(1)`).checked = false
        }
    })

    const handleComplete = (e) => {
        if(e.target.checked) {
            props.updateTodo(props.todo, true, props.id)
        }
        else {
            props.updateTodo(props.todo, false, props.id)
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
        props.updateTodo(editedTodoText, props.isComplete, props.id)
        handleEdit()
    }

    const handleCancel = () => {
        setEditedTodoText(props.todo)
        setEditTodo(false)
    }

    return (
        <li className="todo-item">
            {editTodo ? (
                <form onSubmit={handleSubmit} className="todo-item-container">
                    <div className="text">
                        <input onChange={handleComplete} type="checkbox"/>
                        <input onChange={handleChange} ref={inputRef} className="todo-text-edit" type="text" defaultValue={editedTodoText}></input>
                    </div>
                    <div className="buttons">
                        <button><span className="material-symbols-outlined">done</span></button>
                        <button type="button" onClick={handleCancel}><span className="material-symbols-outlined">close</span></button>
                    </div>
                </form>
            ) : (
                <div className="todo-item-container">
                    <div className="text">
                        <input onChange={handleComplete} type="checkbox"/>
                        {props.isComplete ? (
                            <s className="todo-text">{props.todo}</s>
                        ) : (
                            <span className="todo-text">{props.todo}</span>
                        )}
                    </div>
                    <div className="buttons">
                        <button onClick={handleEdit}><span className="material-symbols-outlined">edit</span></button>
                        <button onClick={() => props.deleteTodo(props.id)}><span className="material-symbols-outlined">delete</span></button>
                    </div>
                </div>
            )}
        </li>
    )
}

export default TodoItem