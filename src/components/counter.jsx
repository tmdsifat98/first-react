import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    let updatedValue = counter + 1;
    setCounter(updatedValue);
  };
  const minusOne = () => {
    let updatedValue = counter - 1;
    setCounter(updatedValue);
  };
  const resetAll = () => {
    let updatedValue = 0;
    setCounter(updatedValue);
  };
  return (
    <div className="user flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold text-pink-600">count: {counter}</h1>
      <div>
        <button
          className="bg-lime-500 hover:bg-gray-400 hover:text-blue-700 rounded-xl text-rose-600 p-5 m-2"
          onClick={minusOne}
        >
          -1
        </button>

        <button
          className="bg-lime-500 hover:bg-gray-400 hover:text-blue-700  rounded-xl text-rose-600 p-5 m-2"
          onClick={resetAll}
        >
          Reset all
        </button>
        <button
          className="bg-lime-500 hover:bg-gray-400 hover:text-blue-700  rounded-xl text-rose-600 p-5 m-2"
          onClick={addOne}
        >
          +1
        </button>
      </div>
    </div>
  );
}
