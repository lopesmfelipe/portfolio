import { useState } from "react";

export const useCount = (currentVal) => {
  const [count, setCount] = useState(currentVal);

  const increase = () => {
    setCount((currentVal) => currentVal + 1);
  };

  const decrease = () => {
    setCount((currentVal) => currentVal - 1);
  };

  const restart = () => {
    setCount(currentVal);
  };

  const reset = () => {
    setCount((currentVal) => currentVal = "So the state(currentVal) was a number and now it's a string");
  };

  return { count, increase, decrease, restart, reset };
};
