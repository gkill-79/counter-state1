import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');

  const increment = () => {
    setCount(count + 1);
    setBgColor('green');
  };
  const decrement = () => {
    setCount(count - 1);
    setBgColor('red');
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '10vh', padding: '1rem' }}>
      <h1>Compteur</h1>
      <p>Vous avez clické, Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;


