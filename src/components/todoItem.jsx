import React from "react";

const TodoItem = (props) => {
    const isChecked = (e) => {
        if(e.target.checked)
        document.querySelector(`li:nth-child(${props.id + 1}) .todo-text`).style.textDecoration = "line-through"
        else
        document.querySelector(`li:nth-child(${props.id + 1}) .todo-text`).style.textDecoration = "none"
    }

    const handleEdit = (e) => {
        const text = document.querySelector(`li:nth-child(${props.id + 1}) .todo-text`)
        text.focus()

        // console.log(props.id)
        // console.log(li)
        // props.updateTodo(props.id)
    }

    return (
        <li className="todo-item">
            <div className="todo-item-container">
                <div className="text">
                    <input onChange={isChecked} type="checkbox"/>
                    <input className="todo-text" type="text" defaultValue={props.todo}></input>
                </div>
                <div className="buttons">
                    <button onClick={handleEdit}><span className="material-symbols-outlined">edit</span></button>
                    <button onClick={() => props.deleteTodo(props.id)}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem