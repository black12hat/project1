import React from 'react'
import TodoCards from './TodoCards'

export default function TodoList(props) {
    const {todo} =props
  return (
    <ul className='main'>
      {todo.map((todo1,todoindex)=>{
        return(
          <TodoCards {...props} key={todoindex} index={todoindex}>
            <p>{todo1}</p>
          </TodoCards>
        )
      })}
    </ul>
  )
}
