import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { v4 as uuidv4 } from "uuid";

let todosList = [
  {
    id: uuidv4(),
    name: "todo one",
    done: false,
  },
  {
    id: uuidv4(),
    name: "todo two",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, todosList);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <h1 className="text-center text-primary">TodoApp</h1>
        </div>

        <div className="col-md-8 mt-4">
          <h3 className="text-center">Todo list</h3>
          <hr />

          <ul className="list-group mx-5">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                {todo.name}
                <button className="btn btn-danger btn-sm">Eliminar</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4 mt-4">
          <h3 className="text-center">Agregar todo</h3>
          <hr />
        </div>
      </div>
    </div>
  );
};
