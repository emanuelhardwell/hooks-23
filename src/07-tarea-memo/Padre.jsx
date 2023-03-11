import { Hijo } from "./Hijo";
import { useCallback, useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  //   const incrementar = (num) => {
  //     setValor(valor + num);
  //   };
  const incrementar = useCallback((num) => {
    setValor((valor) => valor + num);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <h1>Padre</h1>
          <h4 className="py-3"> Total: {valor} </h4>
          <hr />

          {numeros.map((n) => (
            <Hijo key={n} numero={n} incrementar={incrementar} />
          ))}
          {/* <Hijo /> */}
        </div>
      </div>
    </div>
  );
};
