import { useState } from 'react'
import {InputBox} from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [amount, setamount]  =useState(0)
  const [from, sefrom]  = useState(0)
  const [to, setTo] =useState(0)
  const [convertedAmount, setCconvertedAmount] =useState(0)


  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    sefrom(to)
    setTo(from)
    setCconvertedAmount(amount)
    setamount(convertedAmount)
  }

  const convert = () =>{
    setCconvertedAmount(amount * currencyInfo[to])

  } 

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/02/15/01/03/1000_F_215010351_EtWM9iVJyiW5NemiAtNcIBavaf5Kb7Jg.jpg}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onCurrencyChange={(curreency) => setamount(amount)}
                            selectCurrenncy={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(curreency) => setTo(curreency)}
                            selectCurrenncy={from}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase} 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
