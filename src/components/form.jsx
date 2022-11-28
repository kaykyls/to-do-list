import React, { useState } from "react";

const TodoForm = (props) => {
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodo("")
        console.log(todo)
        props.addTodo(todo)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name=""
            id=""
            value={todo}
            onChange={handleChange}
            />
            <input type="submit"/>
        </form>
    )
}

export default TodoForm