import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumallowed] = useState(false)
  const [charAllowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState('')

  //ref hook
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let passwo = ''
    let strin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) strin += "0123456789"
    if (charAllowed) strin += "(){}[]@#$%"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strin.length + 1)
      passwo += strin.charAt(char)
    }
    setpassword(passwo)

  }, [length, numAllowed, charAllowed, setpassword])

  const copyPasswordtoclipboard = useCallback(() => {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordgenerator()
  }, [length, numAllowed, charAllowed, passwordgenerator])

  return (
    <>
      <h1 className='text-4xl  text-center text-white my-3 '>Password Generator</h1>
      <div className='w-full max-w-mdmx-auto raunded-lg px-10 my-8 text-orange-600  bg-black'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
        </div>
        <button onClick={copyPasswordtoclipboard} className='bg-blue-700'>Copy</button>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => { setlength(e.target.value) }} />
            <label >length:{length}</label>
          </div>
          <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() => {
              setnumallowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number</label>

          <input type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setnumallowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Character</label>

        </div>
      </div>
    </>
  )
}

export default App
