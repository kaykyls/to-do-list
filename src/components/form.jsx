import React, { useState } from "react";

const TodoForm = (props) => {
    const [todoField, setTodoField] = useState("")

    const handleChange = (e) => {
        setTodoField(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todoField !== "")
        props.addTodo(todoField)
        setTodoField("")
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input
            type="text"
            name="todo"
            id="todo"
            value={todoField}
            placeholder="Add Task"
            onChange={handleChange}
            />
            <button><span className="material-symbols-outlined">add_circle</span></button>
        </form>
    )
}

export default TodoForm