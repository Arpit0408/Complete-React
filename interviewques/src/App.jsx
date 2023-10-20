import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
 // let counter =15
 const addvalue=()=>{
  setCounter(prevcounter=>prevcounter+1)
  setCounter(prevcounter=>prevcounter+1)
  setCounter(prevcounter=>prevcounter+1)
  setCounter(prevcounter=>prevcounter+1)



 }

 const removevalue=()=>{
  setCounter(counter+-1)
 }
  return (
    <>
    
    <h1>React</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addvalue}
    >Add Value{counter}</button>

    <br />
    <button onClick={removevalue}
    >Remove Value{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
