import { useState } from "react";

export const useCount = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount((prev) => initialVal);
  };

  return { count, increase, decrease, restart };
};
