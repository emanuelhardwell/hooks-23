import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";
import { TodoForm } from "./TodoForm";

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

  const uploadNewTodo = (todo) => {
    const newTodo = {
      type: "[Todo] add",
      payload: { id: uuidv4(), name: todo || "----" },
    };

    console.log(newTodo);
    // dispatch(newTodo);
  };

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
          <TodoForm uploadNewTodo={uploadNewTodo} />
        </div>
      </div>
    </div>
  );
};
