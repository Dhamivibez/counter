import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="counter">
      <h4>Counter</h4>
      <h2>{count}</h2>
      <div>
        <button onClick={decreaseCount} className="btn">
          Decrement
        </button>
        <button onClick={resetCount} className="btn">
          Reset
        </button>
        <button onClick={increaseCount} className="btn">
          Increment
        </button>
      </div>
    </div>
  );
};
export default Counter;
