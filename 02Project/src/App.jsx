import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 15;
  const addvalue =() => {
    if(counter<20){
      setCounter(counter+1)
    }
    else{
      alert("value must be less than 20")
    }

    //counter = counter+1; 
    console.log(counter);
   
    
  }

  const removeValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      alert("value must be +VE")
    }
    
  }


  return (
   <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addvalue}
    >AddValue</button>
    <br/>
    <button onClick={removeValue}>RemoveValue : {counter}</button>
   </>
  )
}

export default App
