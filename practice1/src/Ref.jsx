import React, { useRef } from 'react';

const Ref = () => {
   const myInputRef = useRef(null);

   const counterRef = useRef(0);

  const handleButtonClick = () => {
      myInputRef.current.focus();

     counterRef.current += 1;
    console.log('Current Counter Value:', counterRef.current);
  };

  return (
    <div>
      <input type="text" ref={myInputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

export default Ref;
