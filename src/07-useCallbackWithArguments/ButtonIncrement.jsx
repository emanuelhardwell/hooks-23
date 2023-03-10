import React from "react";

export const ButtonIncrement = React.memo(({ increment }) => {
  console.log("ButtonIncrement renderizado!!");

  return (
    <>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        Incrementar
      </button>
    </>
  );
});
