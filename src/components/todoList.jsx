import React, { Fragment, useEffect, useState } from "react";
import TodoForm from "./form";
import TodoItem from "./todoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    return(
        <div className="todo-list-container">
            <TodoForm addTodo={addTodo}/>

            <ul className="todo-list">
                {todos.map((todo, index) => 
                    <TodoItem
                        todo={todo}
                        key={index}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList