import React from 'react';
import useCounter from './useCounter';

const MyComponent = () => {
  const { count, increment, decrement } = useCounter(0, 2);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
