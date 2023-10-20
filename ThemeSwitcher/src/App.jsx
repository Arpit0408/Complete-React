import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import Card from './Components/card'
import ThemeBtm from './Components/Themebtm'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  // actual change in theme

  useEffect(() => {
    const bgtheme = document.querySelector('html').classList
    bgtheme.remove("light", "dark")
    bgtheme.add(themeMode)

  }, [themeMode])

  return (
    <>
      {/* <h1 className='p-4 bg-pink-400 text-3xl rounded'>Theme Changer</h1> */}
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtm />

            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
