import PropTypes from "prop-types";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos }) => {
  return (
    <>
      <ul className="list-group mx-4">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
