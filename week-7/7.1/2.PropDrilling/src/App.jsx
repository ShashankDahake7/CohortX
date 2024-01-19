// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Count count={count} />
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   )
// }

// function Count({ count }) {
//   return (
//     <div>
//       Count : {count}
//     </div>
//   )
// }

// function Buttons({ count, setCount }) {
//   return (
//     <div>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>Increase</button>
//       <button onClick={() => {
//         setCount(count - 1)
//       }}>Decrease</button>
//     </div>
//   )
// }

// export default App

// Prop Drilling - Prop drilling is a React technique for managing data flow between components. It involves passing data from a parent component to its child components through props.
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
}

function Count({ count, setCount }) {
  return (
    <div>
      Count : {count}
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease</button>
    </div>
  )
}

export default App