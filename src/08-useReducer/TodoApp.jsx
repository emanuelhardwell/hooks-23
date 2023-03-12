import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

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
        <TodoTitle />

        <div className="col-md-8 mt-4">
          <h3 className="text-center">Todo list</h3>
          <hr />

          <TodoList todos={todos} />
        </div>

        <div className="col-md-4 mt-4">
          <h3 className="text-center">Agregar todo</h3>
          <hr />
        </div>
      </div>
    </div>
  );
};
