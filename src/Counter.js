import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
  <div>
    <p>{count}</p>
    <button onClick={() => { console.log(count);setCount(count + 1)}}>Increment</button>
  </div>
);
}


export default Counter;