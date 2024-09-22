import { useState } from 'react'
import './App.css'

// not watching
// let state = {
//   count: 0
// }
// function onClickHandler() {
//   state.count = state.count + 1;
// }
{/* <button onClick={onClickHandler}>Counter {state.count}</button> */ }

// State
// function App() {
//   const [count, setCount] = useState(0);

//   function onClickHandler() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <button onClick={onClickHandler}>Counter {count}</button>
//     </div>
//   )
// }

// above code gets transpiled to below code (both works same)
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      {/* <CustomButton count={count * 10} setCount={setCount}></CustomButton> */}
    </div>
  )
}

// component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return (
    <div>
      <button onClick={onClickHandler}>Counter {props.count}</button>
    </div>
  )
}

export default App