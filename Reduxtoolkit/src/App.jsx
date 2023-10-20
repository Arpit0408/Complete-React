import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Component/Addtodo'
import Todos from './Component/SimpleTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Redux Toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
