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

    const randomPlaceholders = [
        "Walk the dog",
        "Do the dishes",
        "Do the homework",
        "Cut the grass",
        "Take out the trash",
        "Do the loundry",
        "Wash the car",
        "Water the plants",
        "Clean the house"
    ]

    const randomPosition = Math.floor(Math.random() * randomPlaceholders.length)
    const randomPlaceholder = randomPlaceholders[randomPosition]

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input
            type="text"
            name="todo"
            id="todo"
            value={todoField}
            placeholder={randomPlaceholder}
            onChange={handleChange}
            />
            <button><span className="material-symbols-outlined">add_circle</span></button>
        </form>
    )
}

export default TodoForm