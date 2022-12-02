import React, { Fragment, useEffect, useState } from "react";
import TodoForm from "./form";
import TodoItem from "./todoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([])

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

    const updateTodo = (index) => {
        const updatedTodo = window.prompt()
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
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList