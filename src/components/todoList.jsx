import React, { Fragment, useEffect, useState } from "react";
import TodoForm from "./form";
import TodoItem from "./todoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
        console.log(todos)
    }

    return(
        <Fragment>
            <TodoForm addTodo={addTodo}/>

            <ul>
                {todos.map((todo, index) => 
                    <TodoItem
                        todo={todo}
                        key={index}
                    />
                )}
            </ul>
        </Fragment>
    )
}

export default TodoList