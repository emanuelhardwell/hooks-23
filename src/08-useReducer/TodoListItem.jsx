import PropTypes from "prop-types";

export const TodoListItem = ({ todo }) => {
  return (
    <>
      <li
        key={todo?.id}
        className="list-group-item d-flex justify-content-between"
      >
        {todo?.name}
        <button className="btn btn-danger btn-sm">Eliminar</button>
      </li>
    </>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
