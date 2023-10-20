import { useState } from 'react'

import './App.css'
import User from '../../reactRouter/src/components/User/User'
import UserContextprovider from './Context/UserContextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(50)

  return (
    <>
  <UserContextprovider>
    <h1>ReactJS</h1>
    <Login/>
    <Profile/>
  </UserContextprovider>
    </>
  )
}

export default App
