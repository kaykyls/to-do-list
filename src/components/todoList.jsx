import React, { Fragment, useEffect, useState } from "react";
import TodoForm from "./form";
import TodoItem from "./todoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState("all")

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

    console.table(todos)

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
        setFilter("active")
        toggleButtons(".active")
    }

    const handleFitlerComplete = () => {
        setFilter("complete")
        toggleButtons(".complete")

    }

    const handleFilterAll = () => {
        setFilter("all")
        toggleButtons(".all")
    }

    const toggleButtons = (button) => {
        document.querySelector(".active-btn").style.color = "#b6b6b6"
        document.querySelector(".complete-btn").style.color = "#b6b6b6"
        document.querySelector(".all-btn").style.color = "#b6b6b6"

        document.querySelector(`${button}-btn`).style.color = "#000"
    }

    let todoList

    if(filter === "all") {
        todoList = todos.map((todo, index) => 
        <TodoItem
            todo={todo.text}
            isComplete={todo.isComplete}
            key={index}
            id={index}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
        />)
    }

    if(filter === "complete") {
        todoList = todos.map((todo, index) => {
            if(todo.isComplete) {
                return (
                    <TodoItem
                        todo={todo.text}
                        isComplete={todo.isComplete}
                        key={index}
                        id={index}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                )
            }
            return null
        })
    }

    if(filter === "active") {
        todoList = todos.map((todo, index) => {
            if(!todo.isComplete) {
                return (
                    <TodoItem
                        todo={todo.text}
                        isComplete={todo.isComplete}
                        key={index}
                        id={index}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                )
            }
            return null
        })
    }

    return(
        <div className="todo-list-container">
            <TodoForm addTodo={addTodo}/>
            <ul className="todo-list">
                {todoList}
            </ul>
            <div>
                {todos.length > 0 ?
                <div className="filter-buttons">
                    <button className="active-btn" onClick={handleFitlerActive}>Active</button>
                    <button className="complete-btn" onClick={handleFitlerComplete}>Complete</button>
                    <button className="all-btn active" onClick={handleFilterAll}>All</button>
                </div>
                : null}
            </div> 
        </div>
        
    )
}

export default TodoList