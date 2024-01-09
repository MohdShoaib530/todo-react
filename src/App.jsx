import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext'

function App() {
  const[ list,setList ]= useState([
    {id:1, todoData: "Learn React",finished: false},
    {id:2, todoData: "Learn JSX",finished: false},
  ])

  return (
    <TodoContext.Provider value={{list ,setList}} >
      <AddTodo updateList={(todo) => setList([
        ...list,{id:list.length + 1, todoData:todo, finished: false},
      ])} />
      <TodoList/>
    </TodoContext.Provider >
  )
}

export default App
