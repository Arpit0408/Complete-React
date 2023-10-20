import React from 'react'
import Usercontext from './Usercontext'

const UserContextprovider=({children}) =>{
    const[User ,setUser] =React.useState(null)
    return (
        <Usercontext.Provider value={{User ,setUser}}>
        {children}
        </Usercontext.Provider>
    )
}

export default UserContextprovider
