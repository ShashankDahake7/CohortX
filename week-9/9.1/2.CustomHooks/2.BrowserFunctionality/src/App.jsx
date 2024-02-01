// 1. useIsOnline hook
// Create a hook that returns true or false based on whether the user is currently online
// You are given that - 
// window.navigator.onLine returns true or false based on whether the user is online
// You can attach the following event listeners to listen to whether the user is online or not
// import { useEffect, useState } from 'react'

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);
//   useEffect(() => {
//     window.addEventListener('online', () => setIsOnline(true));
//     window.addEventListener('offline', () => setIsOnline(false));
//   }, [])
//   return isOnline;
// }

// function App() {
//   const isOnline = useIsOnline(5);
//   return (
//     <>
//       {isOnline ? "You are online!" : "You are not online"}
//     </>
//   )
// }

// export default App

// 2. useMousePointer hook
// Create a hook that returns you the current mouse pointer position.
// import { useEffect, useState } from 'react'

// const useMousePointer = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };
//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);
//   return position;
// };

// function App() {
//   const mousePointer = useMousePointer();
//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }

// export default App

// 3. useMousePointer hook
// Create a hook that returns you the current mouse pointer position.

import { useEffect, useState } from 'react';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleResize = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};

function App() {
  const { width, height } = useDimensions();
  return (
    <>
      Window dimensions: {width} x {height}
    </>
  );
}

export default App;