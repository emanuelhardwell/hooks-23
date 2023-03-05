import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, onAdd, onSubtract, onReset } = useCounter(5);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1>CounterWithCustomHook</h1>
          <hr />
          <h3>counter: {counter}</h3>
          <button className="btn btn-primary me-3" onClick={onAdd}>
            +1
          </button>
          <button className="btn btn-danger me-3" onClick={onSubtract}>
            -1
          </button>
          <button className="btn btn-warning me-3" onClick={onReset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};
