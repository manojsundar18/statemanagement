import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);

  
  const expensiveValue = useMemo(() => {
    console.log('Expensive computation');
     return count * 2;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Expensive Value: {expensiveValue}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
    </div>
  );
};

export default Memo;
