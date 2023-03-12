export const todoReducer = (state = [], action) => {
  if (action.type === "[Todo] add") {
    return [...state, action.payload];
  } else if (action.type === "[Todo] delete") {
    return state.filter((state) => state.id !== action.payload.id);
  }

  return state;
};
