import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child component rendered');
  return <button onClick={onClick}>Click me</button>;
});

const Callback = () => {
  const [count, setCount] = useState(0);

  
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default Callback;
