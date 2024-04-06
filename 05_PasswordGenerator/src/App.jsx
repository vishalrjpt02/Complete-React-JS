import { useState , useCallback } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenrator = useCallback( () => {
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += '0123456789';
    if(charAllowed) str+= "!@#$%^&*()~_+{}[]";

    for (let i = 0; i <= array.length; i++) {
      let char =Math.floor(Math.random() * str.lenght +1)
      pass = str.charAt(char);
    }
  }
   , [lenght,numberAllowed,charAllowed,password, setpassword])
  return (
    <>
    <div>
      <div className='w=full max-w-md mx-auto shadow-md rounded-lg px-3 py-8 text-orange-500 bg-gray-700'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3 placeholder= password readonly' /> 
      </div>
    </div>
      <h1 className='text-4xl text-center text-white'>Password Genrator</h1>
    </>
  )
}

export default App
