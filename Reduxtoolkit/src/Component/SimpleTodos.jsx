import React from 'react'
import { UseSelector ,useDispatch } from 'react-redux'
import{removeTodo} from '../Features/Todo/TodoSlices'



function Todos() {
  
      const todos=  UseSelector(state => state.Todos)
      const dispatch =useDispatch()
      return (
        <>
        <div>Todos</div>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button 
                onClick={()=>dispatch(removeTodo(todo.id))}>DEL</button>
            </li>
        ))}
        </>
    )
}

export default Todos
