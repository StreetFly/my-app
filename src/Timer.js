import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    setSeconds(s => s + 1);
  }, 1000);

  return () => clearInterval(interval); // Cleanup
  }, []);
  
  

  const stopTimer = () => {
    setSeconds(0);
  }

  return (
    <>
    <button onClick={stopTimer}>Stop Timer</button>
    <p>Timer: {seconds}s</p>
    </>
  );
}

export default Timer;
