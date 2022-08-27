import React from 'react'
import ToDoItems from "../component/ToDoItems";

const ToDos = (props) => {
    let myStyle={
        minHeight:"70vh"
    }
    return (
        <div className='container my-3' style={myStyle}>
            <h3 className='my-3'>Todos List</h3>
            {props.todos.length === 0 ? "no desplay to todo" :
                props.todos.map((todo) => {
                    return (
                   
                    <ToDoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
                   
                    )
                })}

        </div>
    )
}

export default ToDos
