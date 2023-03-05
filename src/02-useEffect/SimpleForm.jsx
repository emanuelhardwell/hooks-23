import React, { useState } from "react";
import { CleanUpUseEffet } from "./CleanUpUseEffet";

export const SimpleForm = () => {
  const [formValues, setFormValues] = useState({
    name: "emanuel",
    email: "emanuel@gmail.com",
  });

  const { name, email } = formValues;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1 className="text-center">SimpleForm</h1>
          <hr />

          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                {name === "emanuel1" && <CleanUpUseEffet />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
