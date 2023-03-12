import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoForm = ({ uploadNewTodo }) => {
  const { name, onInputChange, onClearForm } = useForm({
    name: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      console.log("El nombre debe tener más de 2 caracteres ");
      return;
    }

    uploadNewTodo(name);
    onClearForm();
    // console.log("Formulario enviado !!");
    // console.log(name);
  };

  return (
    <>
      <div className="card mx-3">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese un texto"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-primary btn-sm">Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
