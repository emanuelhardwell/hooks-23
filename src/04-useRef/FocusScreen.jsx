import React, { useRef } from "react";

export const FocusScreen = () => {
  const refInput = useRef();

  const onClickFocus = () => {
    console.log(refInput);
    refInput.current.select();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-5">
          <h1 className="text-center">FocusScreen</h1>
          <hr />

          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <input
                  ref={refInput}
                  className="form-control"
                  type="text"
                  placeholder="Ingrese su nombre ..."
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={onClickFocus}>
                  Focus button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
