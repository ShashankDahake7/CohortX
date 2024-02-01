// 1.  useInterval
// Create a hook that runs a certain callback function every n seconds.
// You have to implement useInterval which is being used in the code below - 

// import { useEffect, useState } from 'react';

// const useInterval = (callback, delay) => {
//   useEffect(() => {
//     const intervalId = setInterval(callback, delay);
//     return () => clearInterval(intervalId);
//   }, [callback, delay]);
// };

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// export default App

// 2. useDebounce
// Create a hook that debounces a value given
// The value that needs to be debounced
// The interval at which the value should be debounced.

import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
  useEffect(() => {

  }, [])

  return <> Debounced Value is {debouncedValue} <br />
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  </>
};

export default SearchBar;