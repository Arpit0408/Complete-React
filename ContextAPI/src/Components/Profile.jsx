import React,{useContext} from 'react'

import Usercontext from '../Context/Usercontext'

function Profile() {
    const{User}= useContext(Usercontext)
    
    if(!User){
        return <div>Please Login</div>
    }
    else{
        return <div>Welcome{User.username}</div>
    }
}

export default Profile
