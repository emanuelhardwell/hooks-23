import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";

let todosList = [
  {
    id: "1",
    name: "todo one",
    done: false,
  },
  {
    id: "2",
    name: "todo two",
    done: false,
  },
];

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, (todosList = []));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <h1 className="text-center text-primary">TodoApp</h1>
        </div>

        <div className="col-md-8 mt-4">
          <h3 className="text-center">Todo list</h3>
          <hr />
        </div>

        <div className="col-md-4 mt-4">
          <h3 className="text-center">Agregar todo</h3>
          <hr />
        </div>
      </div>
    </div>
  );
};
