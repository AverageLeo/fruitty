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

    case "NUTRITION_CHANGE_PENDING":
      return Object.assign({}, state, { isPending: true });

    case "NUTRITION_CHANGE_SUCCESS":
      const updatedFruits = [...state.fruits].map((fruit) =>
        fruit.name.toLowerCase() === action.payload.name.toLowerCase()
          ? action.payload
          : fruit
      );
      return Object.assign({}, state, { fruits: updatedFruits });

    case "NUTRITION_CHANGE_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};

const initialStateLogin = {
  isPending: false,
  user: null,
  error: "",
};

export const loginUserReducer = (state = initialStateLogin, action = {}) => {
  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return Object.assign({}, state, { isPending: true });

    case "USER_LOGIN_SUCCESS":
      return Object.assign({}, state, {
        user: action.payload,
        isPending: false,
      });

    case "USER_LOGIN_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    case "USER_LOGOUT_PENDING":
      return Object.assign({}, state, { isPending: true });

    case "USER_LOGOUT_SUCCESS":
      return Object.assign({}, state, {
        user: null,
        isPending: false,
      });

    case "USER_LOGOUT_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });

    default:
      return state;
  }
};

const initialStateFavoriteFruits = {
  isPending: false,
  favoriteFruitsNamesList: [],
  error: "",
};

export const localFavoriteFruitsReducer = (
  state = initialStateFavoriteFruits,
  action = {}
) => {
  switch (action.type) {
    case "READ_FAVORITE_FRUITS_PENDING":
      return Object.assign({}, state, { isPending: true });

    case "READ_FAVORITE_FRUITS_SUCCESS":
      return Object.assign({}, state, {
        favoriteFruitsNamesList: action.payload,
        isPending: false,
      });

    case "READ_FAVORITE_FRUITS_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    case "WRITE_FAVORITE_FRUITS_PENDING":
      return Object.assign({}, state, { isPending: true });

    case "WRITE_FAVORITE_FRUITS_SUCCESS":
      return Object.assign({}, state, {
        favoriteFruitsNamesList: action.payload,
        isPending: false,
      });

    case "WRITE_FAVORITE_FRUITS_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
