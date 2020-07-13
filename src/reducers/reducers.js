const initialStateFruits = {
  isPending: false,
  fruits: [],
  error: "",
};

export const requestFruitsReducer = (
  state = initialStateFruits,
  action = {}
) => {
  switch (action.type) {
    case "REQUEST_FRUITS_PENDING":
      return Object.assign({}, state, { isPending: true });

    case "REQUEST_FRUITS_SUCCESS":
      return Object.assign({}, state, {
        fruits: action.payload,
        isPending: false,
      });

    case "REQUEST_FRUITS_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
