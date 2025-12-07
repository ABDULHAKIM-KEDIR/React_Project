import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyCounter() {
  const [count, setCount] = useState(10)
 
     function  increment () {
        setCount(count + 1);
        console.log("local",count);
      }
      function  decrement () {
        setCount(count - 1);
        console.log("local",count);
      }
      function reset() {
        setCount(0);
        console.log('reset to 0')
      }
      
  return (
   <div>
    <p>local variable : {count}</p>
    <button onClick={increment}> Icnrease local </button>
 
    <button onClick={decrement}> decrease local </button>
   </div>
   
   
  )
}

export default MyCounter;
