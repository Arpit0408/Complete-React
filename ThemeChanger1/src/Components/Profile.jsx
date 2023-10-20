import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const [user] = useContext(UserContext)

    if (!user) return (
        <div>
            Please LogIn</div>)
    return <div>Welcome (user.Username)</div>


}

export default Profile
