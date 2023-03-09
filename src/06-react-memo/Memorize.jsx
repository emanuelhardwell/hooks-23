import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { SmallCounter } from "./SmallCounter";

export const Memorize = () => {
  const { counter, onAdd } = useCounter();
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-5 mx-auto">
          <h1 className="text-center">Memorize - React.memo</h1>
          <hr />

          <h2>
            Counter: <SmallCounter counter={counter} />{" "}
          </h2>
          <button className="btn btn-primary me-4" onClick={onAdd}>
            Increment +
          </button>
          <button className="btn btn-success me-4" onClick={() => setShow(!show)}>
            Show / Hide
          </button>
          <code> {JSON.stringify(show)} </code>
        </div>
      </div>
    </div>
  );
};
