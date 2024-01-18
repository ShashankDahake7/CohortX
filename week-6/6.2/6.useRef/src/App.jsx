// import { useEffect, useState } from 'react'

// function App() {
//   const [incomeTax, setIncomeTax] = useState(20000);

//   useEffect(() => {
//     setTimeout(() => {
//       document.getElementById("incomeTaxContainer").innerHTML = 7
//     }, 5000);
//   }, [])

//   return (
//     <div>
//       hi there, your income tax returns are <div id="incomeTaxContainer">{incomeTax}</div>
//     </div>
//   )
// }

// export default App

// useRef - useRef is a React Hook that lets you reference a value that’s not needed for rendering.

import { useEffect, useRef } from 'react'

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "7"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App