// import { useState } from 'react'

// function App() {
//   const [title,setTitle] = useState("Shashank");

//   function handleClick(){
//     setTitle(Math.random());
//   }

//   return (
//     <div>
//       <button onClick={handleClick} >Click me to change the title</button>
//       <Header title={title} />
//       <Header title="King" />
//       <Header title="Prince" />
//     </div>
//   )
// }

// export function Header({ title }) {
//   return (
//       <div>
//           My name is {title}
//       </div>
//   )
// }

// export default App;

// Issue: State change in first child component but everything is re-rendering 
// Solutions:

// 1. Pushing the state down
// Here, only the changed state is re-rendering
// import { useState } from "react"

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="My name is King" />
//       <Header title="My name is Prince" />
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("My name is Shashank");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return <>
//     <button onClick={changeTitle}>Click me to change the title</button>
//     <Header title={firstTitle} />
//   </>
// }

// function Header({ title }) {
//   return <div>
//     {title}
//   </div>
// }

// export default App

// 2. React.memo : memo lets you skip re-rendering a component when its props are unchanged.

import { useState } from 'react'
import React from 'react'

function App() {
  const [title, setTitle] = useState("Shashank");

  function handleClick() {
    setTitle(Math.random());
  }

  return (
    <div>
      <button onClick={handleClick} >Click me to change the title</button>
      <Header title={title} />
      <Header title="King" />
      <Header title="Prince" />
    </div>
  )
}

const Header = React.memo(function Header({ title }) {
  return (
    <div>
      My name is {title}
    </div>
  )
});

export default App;