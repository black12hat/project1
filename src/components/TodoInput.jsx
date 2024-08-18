import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos, TodoValue, setTodoValue} =props
  
  return (
    <header>
      <input value={TodoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }}
      placeholder='Enter Todo...'/>
      <button onClick={()=> {
        handleAddTodos(TodoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}
