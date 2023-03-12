export const todoReducer = (state, action) => {
  if (action.payload === "[Todo] add") {
    return [...state, action.payload];
  } else if (action.payload === "[Todo] delete") {
    return state.find((state) => state.id !== action.payload.id);
  }

  return state;
};
