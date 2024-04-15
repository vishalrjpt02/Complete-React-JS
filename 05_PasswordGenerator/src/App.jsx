import { useState , useCallback, useEffect, useRef } from 'react'


function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenrator = useCallback( () => {
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += '0123456789';
    if(charAllowed) str+= "!@#$%^&*()~_+{}[]~'";

    for (let i = 0; i <= length; i++) {
      let char =Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char);
    }
    setpassword(pass)
  } 
  , [lenght,numberAllowed,charAllowed,password, setpassword])
  return (

    <div>
      <div className='w=full max-w-md mx-auto shadow-md rounded-lg px-3 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white my-3'>Password Genrator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
                value={password}
                className="outline-none w-full py-1 px-3" 
                placeholder= "password" 
                readonly 
        /> 
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-centre gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={lenght}
          className='cursor-pointer' 
          onChange={(e) => {setLenght(e.target.value)}} />
          <label>Lenght : {lenght}</label>
        </div>
          <div className='flex items-centre gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked = {numberAllowed}
              id= "numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-centre gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked = {charAllowed}
              id= "charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}/>
          <label htmlFor='charInput'>Character</label>
          </div>
      </div>
      </div>
    </div>

  )
}

export default App
