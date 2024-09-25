// Recoil - It is a State Management Library
// 1. Minimal and Reactish - Recoil works and thinks like React. Add some to your app and get fast and flexible shared state.
// 2. Data-Flow Graph - Derived data and asynchronous queries are tamed with pure functions and efficient subscriptions.
// 3. Cross-App Observation- Implement persistence, routing, time-travel debugging, or undo by observing all state changes across your app, without impairing code-splitting.

import { RecoilRoot, useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom, isEvenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  // console.log("re-render"); // Renders only once
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      Count : {count}
      {/* <EvenCountRenderer /> */}
      <EvenIndicator />
    </div>
  )
}

// function EvenCountRenderer(){
//   const count = useRecoilValue(countAtom);
//   const isEven = (count % 2== 0);
//   return <div>
//     {isEven ? "It is Even": "It is Odd"}
//   </div>
// }

// function EvenCountRenderer() {
//   const count = useRecoilValue(countAtom);
//   const isEven = useMemo(() => {
//     return (count % 2 == 0)
//   }, [count]);
//   return <div>
//     {(count % 2 == 0) ? "It is Even" : "It is Odd"}
//   </div>
// }

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  // console.log("Button re-rendered");
  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count => count - 1)
      }}>Decrease</button>
    </div>
  )
}

function EvenIndicator() {
  // Use the selector to get the even state
  const isEven = useRecoilValue(isEvenSelector);
  // Render conditionally based on whether the count is even
  return (
    <div>
      {isEven ? "It is Even" : "It is Odd"}
    </div>
  )
}

export default App;