import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 1000) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("ahí vamos!!");
  }

  return `${iterationNumber} iteraciones realizadas!!`;
};

export const Memo = () => {
  const { counter, onAdd } = useCounter(1000);
  const [show, setShow] = useState(false);

  // el useMemo sirve para que no se ejecute una FUNCION MUY PESADA  cuando el arreglo de DEPENDENCIAS no han cambiado
  const numberMemo = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-5 mx-auto">
          <h1 className="text-center">Memorize - React.memo</h1>
          <hr />

          <h2> {numberMemo}</h2>
          <hr />

          <h2 className="pt-3">Counter: {counter}</h2>
          <button className="btn btn-primary me-4" onClick={onAdd}>
            Increment +
          </button>
          <button
            className="btn btn-success me-4"
            onClick={() => setShow(!show)}
          >
            Show / Hide
          </button>
          <code> {JSON.stringify(show)} </code>
        </div>
      </div>
    </div>
  );
};
