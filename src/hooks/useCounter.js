import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const onSubtract = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const onAdd = () => {
    setCounter(counter + 1);
  };

  const onReset = () => {
    setCounter(initialValue);
  };

  return { counter, onAdd, onSubtract, onReset };
};
