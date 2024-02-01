// https://daily-code-web.vercel.app/tracks/3Vhp7rCJUVjnvFuPxZSZ/hook-1

import './App.css'
import React, { useEffect, useState } from 'react';

// function App() {
//   return (
//     <>
//       <MyComponent />
//     </>
//   )
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);
//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// Lifecycle events
// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted");
//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);
//   return <div>
//     From inside my component
//   </div>
// }

// class MyComponent extends React.Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.error("component mounted");
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//      console.log("component unmounted")
//   }

//   render() {
//      // Render UI
//      return <div>From inside MyComponent</div>
//   }
// }

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000)
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    console.error("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return <div>
    From inside my component
  </div>
}


export default App