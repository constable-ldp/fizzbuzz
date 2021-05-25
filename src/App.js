import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(1)
  const [message, setMessage] = useState('')
  const [endMessage, setEndMessage] = useState('')

  useEffect(() => {
    if (number === 1){
      setMessage("Start Again")
    }
    else if (number === 16) {
      setMessage("Keep Going! You reached 15!")
    }
    else if (number === 31) {
      setMessage("Keep Going! You reached 30!")
    }
    else if (number === 46) {
      setMessage("You reached 45, maybe it's time to stop and get a life.")
    }
    else {
      setMessage("Keep Going!")
    }
  }, [number])

  const increaseNumber = () => {
    if (number % 3 !== 0 && number % 5 !== 0){
      setNumber(number + 1)
    }
    else {
      setEndMessage('You reached ' + number)
      setNumber(1)
    }
    
  }

  const checkFizz = () => {
    if (number % 3 === 0 && number % 5 !== 0) {
      setNumber(number + 1)
    }
    else {
      setNumber(1)
    }
  }

  const checkBuzz = () => {
    if (number % 5 === 0 && number % 3 !== 0) {
      setNumber(number + 1)
    }
    else {
      setNumber(1)
    }
  }

  const checkFizzBuzz = () => {
    if (number % 3 === 0 && number % 5 === 0){
      setNumber(number + 1)
    }
    else {
      setNumber(1)
    }

  }

  return (
    <div className="App">
      <h1>FizzBuzz</h1>
      <h2>{message}</h2>
      {/* <h2>Current number {number}</h2> */}
      <button value={number} onClick={increaseNumber}>+1</button>
      <button value={number} onClick={checkFizz}>Fizz</button>
      <button value={number} onClick={checkBuzz}>Buzz</button>
      <button value={number} onClick={checkFizzBuzz}>FizzBuzz</button>
      <h2>{endMessage}</h2>
    </div>
  );
}

export default App;
