import React from "react";

// el React.memo sirve para que no se renderize el Component cuando las PROPS (PARAMETROS) no han cambiado
export const SmallCounter = React.memo(({ counter }) => {
  console.log("Ejecutandose SmallCounter");

  return (
    <>
      <p>{counter}</p>
    </>
  );
});
