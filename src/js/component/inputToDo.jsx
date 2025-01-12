import React from 'react'

import { useState } from 'react';

//todo list component


export const InputToDo = () => {
    const [newItem, setNewItem] = useState(" ")
    const [todos, setTodos] = useState([]) //empty array for todos

    const handleSubmit = (e) => {
        // page will stop refreshing
        e.preventDefault()
        setTodos([...todos, { id: crypto.randomUUID(), title: newItem, completed: false }])
        
        //resets input field
        setNewItem("")

      
    }

    const deleteTodo = (id) => {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
        }  

    return (
        <div className="container-sm" id='inputSize'>
                <div className="d-flex justify-content-center">
                    <h1 className="heading py-3">To Do List</h1>
                </div>
                <form classname="task-form" onSubmit={handleSubmit} >
                    <div className="task input-group mb-3">
                        <input 
                        value={newItem} 
                        onChange={e => setNewItem(e.target.value)} 
                        type="text"   
                        className="form-control" 
                        placeholder="What needs to be done?" 
                        aria-describedby="button-addon2" 
                        />               
                    </div>
                </form>
                <ul className="list-group">
                    {/* for each one of my todos i want to return an li */}
                    {todos.map(todo => {
                        return ( 
                        <li key={todo.id} className="list-group-item d-flex justify-content-between">
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)} className="btn">x</button>
                    </li> 
                    )  
                    })}    
                </ul>  
                {/* <div>
                    {setTodos.length}
                </div> */}
        </div>
    )
}

//make new button to iniate the delete function
//implement function 