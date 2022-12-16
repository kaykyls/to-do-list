import React, { Fragment, useEffect, useState } from "react";
import TodoForm from "./form";
import TodoItem from "./todoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [fitlerComplete, setFilterComplete] = useState(false)

    const storageTodos = () => {
        if(todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }
    
    const loadTodos = () =>{
        setTodos([...JSON.parse(localStorage.getItem("todos"))])
    }

    useEffect(storageTodos, [todos])

    useEffect(loadTodos, [])
    
    const addTodo = (newTodo) => {
        setTodos([...todos, {isComplete: false, text: newTodo}])
    }

    const deleteTodo = (index) => {
        if(window.confirm("Do you want to delete this Todo?")) {
            todos.splice(index, 1)
            setTodos([...todos])
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }

    const updateTodo = (updatedText, isComplete, index) => {
        if (updatedText !== "" && updatedText !== null) {
            todos[index].text = updatedText
            todos[index].isComplete = isComplete
            setTodos([...todos])
        }
    }

    const handleFitlerActive = () => {
        setFilterComplete(true)
        if(!fitlerComplete) {
            document.querySelector(".not-complete-btn").classList.toggle("active")
            document.querySelector(".all-btn").classList.toggle("active")
        }
    }

    const handleFitlerComplete= () => {
        setFilterComplete(true)
    }

    const handleFilterAll = () => {
        setFilterComplete(false)
        if(fitlerComplete) {
            document.querySelector(".all-btn").classList.toggle("active")
            document.querySelector(".not-complete-btn").classList.toggle("active")
        }
    }

    return(
        <div className="todo-list-container">
            <TodoForm addTodo={addTodo}/>

            <ul className="todo-list">
                { fitlerComplete ? (todos.filter(todo => todo.isComplete === false).map((todo, index) => 
                    <TodoItem
                        todo={todo.text}
                        isComplete={todo.isComplete}
                        key={index}
                        id={index}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                )) : (todos.map((todo, index) => 
                        <TodoItem
                            todo={todo.text}
                            isComplete={todo.isComplete}
                            key={index}
                            id={index}
                            deleteTodo={deleteTodo}
                            updateTodo={updateTodo}
                        />
                ))}
            </ul>
            <div>
                {todos.length > 0 ?
                <div className="filter-buttons">
                    <button className="not-complete-btn active" onClick={handleFitlerActive}>Active</button>
                    <button className="complete-btn active" onClick={handleFitlerComplete}>Complete</button>
                    <button className="all-btn" onClick={handleFilterAll}>All</button>
                </div>
                : null}
                
            </div>
        </div>
    )
}

export default TodoList