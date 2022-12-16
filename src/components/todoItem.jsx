import React, { useState, useRef, useEffect } from "react";

const TodoItem = (props) => {
    const [editTodo, setEditTodo] = useState(false)
    const [editedTodoText, setEditedTodoText] = useState(props.todo)
    const inputRef = useRef(null);
    const checkRef = useRef(null)

    useEffect(() => {
        if(editTodo) {
            inputRef.current.focus();
        }
    }, [editTodo]);

    useEffect(() => {
        props.isComplete ? checkRef.current.checked = true : checkRef.current.checked = false
    })

    const handleComplete = (e) => {
        e.target.checked ? props.updateTodo(props.todo, true, props.id) : props.updateTodo(props.todo, false, props.id)
    }
    
    const handleEdit = () => {
        if(!props.isComplete)
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
                        <input ref={checkRef} onChange={handleComplete} type="checkbox"/>
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
                        <input ref={checkRef} onChange={handleComplete} type="checkbox"/>
                        {props.isComplete ? (
                            <s className="todo-text">{props.todo}</s>
                        ) : (
                            <span className="todo-text">{props.todo}</span>
                        )}
                    </div>
                    <div className="buttons">
                        {!props.isComplete ? (<button onClick={handleEdit}><span className="material-symbols-outlined">edit</span></button>) : null}
                        
                        <button onClick={() => props.deleteTodo(props.id)}><span className="material-symbols-outlined">delete</span></button>
                    </div>
                </div>
            )}
        </li>
    )
}

export default TodoItem