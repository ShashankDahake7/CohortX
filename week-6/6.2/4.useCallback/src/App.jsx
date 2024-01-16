// Issue - rerenders are happening even though there is no change in Demo 

// import { useState, memo } from "react";

// var a = 1;
// function App() {
//   const [counter, setCounter] = useState(0);

//   function a() {
//     console.log("hi there");
//   }

//   return <div>
//     <button onClick={() => {
//       setCounter(counter + 1);
//     }}>Counter ({counter})</button>
//     <Demo a={a} />
//   </div>
// }

// const Demo = memo(function ({ a }) {
//   console.log("re-render");
//   return <div>
//     hi there {a}
//   </div>
// })

// export default App;



// useCallback - useCallback is a React Hook that lets you cache a function definition between re-renders.

import { useState, useCallback, memo } from "react";

var a = 1;
function App() {
  const [counter, setCounter] = useState(0);

  const a = useCallback(function () {
    console.log("hi there");
  }, []);

  return <div>
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
    <Demo a={a} />
  </div>
}

const Demo = memo(function ({ a }) {
  console.log("re-render");
  return <div>
    hi there {a}
  </div>
})

export default App;