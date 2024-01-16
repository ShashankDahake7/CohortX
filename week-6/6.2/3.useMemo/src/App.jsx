// SD
// import { useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   const [sum, setSum] = useState("")
//   function handleCounter() {
//     setCount(count + 1)
//   }
//   function handleSum(e) {
//     let totalSum = 0;
//     for (let i = 1; i <= e.target.value; i++) {
//       totalSum += i;
//     }
//     setSum(totalSum)
//   }
//   return (
//     <div>
//       <input onChange={handleSum}></input>
//       <p>Sum is {sum}</p>
//       <button onClick={handleCounter}>Counter ({count})</button>
//     </div>
//   )
// }
// export default App

// Harkirat
// import { useState } from "react";
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState();
//   let count = 0;
//   for (let i = 1; i <= inputValue; i++) {
//     count = count + i;
//   }
//   return <div>
//     <input onChange={function (e) {
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum from 1 to n"}></input><br /><br />
//     Sum from 1 to {inputValue} is {count}<br /><br />
//     <button onClick={() => {
//       setCounter(counter + 1);
//     }}>Counter ({counter})</button>
//   </div>
// }
// export default App;

// Issue - when we increment counter whole code runs again, therefore not optimal solution

// sol - (1) useEffect (Two re-rendering happens, extra state variable)
// import { useState, useEffect } from "react";
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
//   const [finalValue, setFinalValue] = useState(0);

//   useEffect(() => {
//     let count = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       count = count + i;
//     }
//     setFinalValue(count);
//   }, [inputValue]);

//   return <div>
//     <input onChange={function (e) {
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum from 1 to n"}></input><br /><br />
//     Sum from 1 to {inputValue} is {finalValue}<br /><br />
//     <button onClick={() => {
//       setCounter(counter + 1);
//     }}>Counter ({counter})</button>
//   </div>
// }
// export default App;

// sol - (2) useMemo - useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
import { useState, useMemo } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState();

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue])

  return <div>
    <input onChange={function (e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input><br /><br />
    Sum from 1 to {inputValue} is {count}<br /><br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}
export default App;