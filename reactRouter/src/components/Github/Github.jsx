import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setdata]=useState([])
    useEffect(()=>{
     fetch('https:api.github.com/users/Arpit0408')
     .then(response => response.json())
     .then(data =>{
     setdata(data)
     })
    },[])
    return (
        <div className='text-center m-4 bg-grey-600  text-white text-3xl'>Github  followers : {data.followers}</div>
    )
}

export default Github
