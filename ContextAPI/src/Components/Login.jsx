import React, { useState , useContext } from "react"
import Usercontext from "../Context/Usercontext"

function Login() {
    const [username ,setusername] =useState('')
    const [password ,setpassword] =useState('')

    const{setUser}=useContext(Usercontext)

    const handlesubmit =(e)=>{
        e.preventDefault()
        setUser({username})
        setUser({password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
             value={username} onChange={(e)=>setusername(e.target.value)}  placeholder="username" />
            <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)}   placeholder="password" />
            <button onClick={handlesubmit}>Submit</button>

        </div>
    )
}

export default Login
