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
    <div className="user">
      <h1>count: {counter}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetAll}>Reset all</button>
    </div>
  );
}
