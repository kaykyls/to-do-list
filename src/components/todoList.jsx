import React, { Fragment, useEffect, useState } from "react";
import TodoForm from "./form";
import TodoItem from "./todoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [checkedTodos, setCheckedTodos] = useState([])

    useEffect(() => {
        checkedTodos.forEach(checkedTodo => {
            document.querySelector(`li:nth-child(${checkedTodo + 1}) .text input`).checked = true
        })
    }, [])

    ///////////////////////////////////////////////////
    const storageCheckedTodos = (id, isChecked) => {
        if(isChecked) {
            setCheckedTodos([...checkedTodos, id])
            localStorage.setItem("isChecked", JSON.stringify(checkedTodos))

            console.log(isChecked)
            console.log(JSON.parse(localStorage.getItem("isChecked")))
        } else {
            checkedTodos.splice(id, 1)
            setCheckedTodos([...checkedTodos])
            localStorage.setItem("isChecked", JSON.stringify(checkedTodos))

            console.log(isChecked)
            console.log(JSON.parse(localStorage.getItem("isChecked")))
        }
    }
    
    ///////////////////////////////////////////////////

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
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (index) => {
        if(window.confirm("Do you want to delete this Todo?")) {
            todos.splice(index, 1)
            setTodos([...todos])
        }
    }

    const updateTodo = (updatedTodo, index) => {
        if (updatedTodo !== "" && updatedTodo !== null) {
            todos[index] = updatedTodo
            setTodos([...todos])
        }
    }

    return(
        <div className="todo-list-container">
            <TodoForm addTodo={addTodo}/>

            <ul className="todo-list">
                {todos.map((todo, index) => 
                    <TodoItem
                        todo={todo}
                        key={index}
                        id={index}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        storageCheckedTodos={storageCheckedTodos}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList