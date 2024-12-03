import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      
      <div className="text-6xl font-semibold mb-6">{count}</div>
      
      <div className="flex space-x-4">
        <button 
          onClick={decrement} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        
        <button 
          onClick={reset} 
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        
        <button 
          onClick={increment} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;