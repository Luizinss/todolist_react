import React from 'react'
import { CiBookmarkCheck } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";


const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className='category'>
                    ({todo.category})
                </p>
            </div>
            <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}><CiBookmarkCheck/>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}><FaRegTrashAlt/></button>
            </div>
        </div>
    )
}

export default Todo
