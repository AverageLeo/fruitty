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

// const initialStateLogout = {
//   isPending: false,
//   user: "",
//   error: "",
// };

// export const logoutUserReducer = (state = initialStateLogout, action = {}) => {
//   switch (action.type) {
//     case "USER_LOGOUT_PENDING":
//       return Object.assign({}, state, { isPending: true });

//     case "USER_LOGOUT_SUCCESS":
//       return Object.assign({}, state, {
//         user: null,
//         isPending: false,
//       });

//     case "USER_LOGOUT_FAILED":
//       return Object.assign({}, state, {
//         error: action.payload,
//         isPending: false,
//       });
//     default:
//       return state;
//   }
// };

const initialStateFavoriteFruits = {
  isPending: false,
  favoriteFruits: [],
  error: "",
};

export const localFavoriteFruitsReducer = (
  state = initialStateFavoriteFruits,
  action = {}
) => {
  switch (action.type) {
    case "REQUEST_FAVORITE_FRUITS_PENDING":
      return Object.assign({}, state, { isPending: true });

    case "REQUEST_FAVORITE_FRUITS_SUCCESS":
      return Object.assign({}, state, {
        favoriteFruits: action.payload,
        isPending: false,
      });

    case "REQUEST_FAVORITE_FRUITS_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    case "SEND_FAVORITE_FRUITS_PENDING":
      return Object.assign({}, state, { isPending: true });

    case "SEND_FAVORITE_FRUITS_SUCCESS":
      return Object.assign({}, state, {
        favoriteFruits: action.payload,
        isPending: false,
      });

    case "SEND_FAVORITE_FRUITS_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
