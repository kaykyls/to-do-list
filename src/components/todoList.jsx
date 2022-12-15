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

    console.log(todos)

    const loadTodos = () =>{
        setTodos([...JSON.parse(localStorage.getItem("todos"))])
    }

    console.log(todos)
    
    useEffect(storageTodos, [todos])

    useEffect(loadTodos, [])

    const addTodo = (newTodo) => {
        setTodos([...todos, {isComplete: false, text: newTodo}])
    }

    const deleteTodo = (index) => {
        if(window.confirm("Do you want to delete this Todo?")) {
            todos.splice(index, 1)
            setTodos([...todos])
        }
    }

    const updateTodo = (updatedText, isComplete, index) => {
        console.log(index)
        if (updatedText !== "" && updatedText !== null) {
            todos[index].text = updatedText
            todos[index].isComplete = isComplete
            setTodos([...todos])
        }
    }

    return(
        <div className="todo-list-container">
            <TodoForm addTodo={addTodo}/>

            <ul className="todo-list">
                {todos.map((todo, index) => 
                    <TodoItem
                        todo={todo.text}
                        isComplete={todo.isComplete}
                        key={index}
                        id={index}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        // storageCheckedTodos={storageCheckedTodos}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList