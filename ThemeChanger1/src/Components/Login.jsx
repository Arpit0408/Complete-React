import { useState ,useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const[Username , SetUsername]=useState('')
    const[password , setpassword] = useState('')
    const {SetUser}= useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        SetUser({Username , password})

    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={Username} onChange={(e)=>
                SetUsername(e.target.value)  } 
                placeholder=' Username' />
                {"  "}
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
