import React, { useCallback, useState } from "react";
import { ButtonIncrement } from "./ButtonIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };
  const increment = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);
  //   useCallback se usa para memorizar funciones ya que estas se guardan en diferente ubicación cada vez que se renderiza el Componente y debe ir acompañado de React.memo

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto mt-5">
          <h1 className="text-center">CallbackHook</h1>
          <hr />
          <h3>Counter: {counter}</h3>

          <div className="mt-5">
            <ButtonIncrement increment={increment} />
          </div>
        </div>
      </div>
    </div>
  );
};
