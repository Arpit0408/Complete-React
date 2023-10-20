import { useEffect, useState } from 'react'
import { ThemeProvider } from './Context/Theme'

import './App.css'
import Themebtn from './Component/Themebtn'
import Card from './Component/Card'

function App() {
 const [themeMode , setThemeMode] =useState('light')
 const lightTheme =()=>{
  setThemeMode('light')
 }
 const darkTheme =()=>{
  setThemeMode('dark')
 }

 // actual change in theme
 useEffect(()=>{
 document.querySelector('html').classList.remove("dark","light")
 document.querySelector('html').classList.add(themeMode)
 },[themeMode])


  return (
   <ThemeProvider value={{themeMode ,lightTheme, darkTheme}}>
 {/* <h1 className='p-4 bg-pink-400 text-3xl rounded'>Theme Changer</h1> */}
 <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
