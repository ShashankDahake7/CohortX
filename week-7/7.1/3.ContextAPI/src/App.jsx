//  Context API - Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

import { useState, useContext } from 'react'
import { CountContext } from './Context'
function App() {
  const [count, setCount] = useState(0)
  
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  )
}

function CountRenderer() {
  const {count} = useContext(CountContext);
  return (
    <div>
      Count : {count}
    </div>
  )
}

function Buttons() {
  const {count, setCount} = useContext(CountContext);
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