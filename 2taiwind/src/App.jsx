import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardUI from './cardUI'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
    username:"hitesh",
    age:40
  }
  let myarr=[1,2,3,4,5,6,7,8,9]
  return (
    <>
   
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TAILWIND CSS</h1>
  <CardUI  chanell='chai or react' btnText="Click"/>
  <CardUI chanell='chai or code' btnText='view  profile'/>

    </>
  )
}

export default App
