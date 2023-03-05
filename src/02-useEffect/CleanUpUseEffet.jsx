import { useEffect } from "react";

export const CleanUpUseEffet = () => {
  useEffect(() => {
    // Se necesita crear la funcion por separado para tener la dirección de memoría
    // y de esa manera remover el listener en el "Clean Up" del UseEffect
    const getCoordenadas = (e) => {
      const { x, y } = e;
      console.log(x, y);
    };

    window.addEventListener("mousemove", getCoordenadas);

    return () => {
      window.removeEventListener("mousemove", getCoordenadas);
    };
  }, []);

  return (
    <div>
      <h1>CleanUpUseEffet</h1>
    </div>
  );
};
