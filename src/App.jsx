import {useState ,useEffect} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  

const [todo,setTodo]=useState([])
const [TodoValue,setTodoValue]=useState('')
function persistData(newList){
  localStorage.setItem('todo',JSON.stringify({todo : newList}))
}

function handleAddTodos(newTodo){
  const newTodoList =[...todo,newTodo]
  persistData(newTodoList)
  setTodo(newTodoList)
}
function handleDeleteTodos(index){
  const newTodoList = todo.filter((todo1,todoindex) => {
    return todoindex !=index
  })
  persistData(newTodoList)
  setTodo(newTodoList)
}

function handleEditTodos(index){
  const valueTobeEdited = todo[index]
  setTodoValue(valueTobeEdited)
  handleDeleteTodos(index)

}
useEffect( () =>{
  if (!localStorage){
    return
  }
  let localTodos= localStorage.getItem('todo')
  if (!localTodos){
    return
  }
  localTodos=JSON.parse(localTodos).todo
  setTodo(localTodos)
},[])
  return (
    <>
     <TodoInput TodoValue={TodoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
     <TodoList  handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todo={todo}/>
    </>
  )
}

export default App
