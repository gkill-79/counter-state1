

import React, { useState } from 'react';

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const [isIncrement, setIsIncrement] = useState(true);

  const handleClick = () => {
    isIncrement ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment/Decrement</button>
      <button onClick={() => setIsIncrement(!isIncrement)}>
        etat Increment ou Decrement
      </button>
    </div>
  );
};

export default Counter2;

 















