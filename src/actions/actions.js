// Action-creator this is fetching Fruits-list
// and dispaching an action to the reducer accordingly

export const requestFruitsActionCreator = (token) => (dispatch) => {
  dispatch({ type: "REQUEST_FRUITS_PENDING" });
  fetch("http://localhost:3003/getFruits", {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "REQUEST_FRUITS_SUCCESS", payload: data.fruitsList });
    })
    .catch((error) => {
      dispatch({ type: "REQUEST_FRUITS_FAILED", payload: error });
    });
};

// Action-creator this is writing Favorite-Fruits-list
// to the localStorage

export const writeLocalFavoriteFruitsActionCreator = (
  fruitName,
  favoriteFruitsList
) => (dispatch) => {
  try {
    dispatch({ type: "WRITE_FAVORITE_FRUITS_PENDING" });
    const index = favoriteFruitsList.indexOf(fruitName);
    if (index > -1) {
      favoriteFruitsList.splice(index, 1);
    } else {
      favoriteFruitsList.push(fruitName);
    }
    localStorage.setItem(
      "favoriteFruitsNamesList",
      JSON.stringify(favoriteFruitsList)
    );
    dispatch({
      type: "WRITE_FAVORITE_FRUITS_SUCCESS",
      payload: favoriteFruitsList,
    });
  } catch (error) {
    dispatch({ type: "WRITE_FAVORITE_FRUITS_FAILED", payload: error });
  }
};

// Action-creator this is reading Favorite-Fruits-list
// from the localStorage

export const readLocalFavoriteFruitsActionCreator = () => (dispatch) => {
  try {
    dispatch({ type: "READ_FAVORITE_FRUITS_PENDING" });
    let storedFruits;
    storedFruits = JSON.parse(localStorage.getItem("favoriteFruitsNamesList"));
    dispatch({
      type: "READ_FAVORITE_FRUITS_SUCCESS",
      payload: storedFruits,
    });
  } catch (error) {
    dispatch({ type: "READ_FAVORITE_FRUITS_FAILED", payload: error });
  }
};

// Action-creator posting login details to the API
// for authentication and return a response

export const loginUserActionCreator = (email, password) => (dispatch) => {
  dispatch({ type: "USER_LOGIN_PENDING" });
  fetch("http://localhost:3003/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        dispatch({ type: "USER_LOGIN_FAILED", payload: data.error });
      } else {
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      }
    })
    .catch((error) => {
      dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    });
};

// Action-creator posting logout request to the API
// and deleting JWT key from DB

export const logoutUserActionCreator = (token) => (dispatch) => {
  dispatch({ type: "USER_LOGIN_PENDING" });
  fetch("http://localhost:3003/checkAuth/logoutALL", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      "Content-Length": 0,
    },
  })
    .then((data) => {
      if (data.error) {
        dispatch({ type: "USER_LOGOUT_FAILED", payload: data.error });
      } else {
        dispatch({ type: "USER_LOGOUT_SUCCESS", payload: null });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "USER_LOGOUT_FAILED", payload: error });
    });
};

export const nutritionRowChangeActionCreator = (id, updatedFruit) => (
  dispatch
) => {
  dispatch({ type: "NUTRITION_CHANGE_PENDING" });
  fetch(`http://localhost:3003/fruit/${id}/updateNutrition`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFruit),
  })
    .then(function (response) {
      return response.json().then(function (data) {
        if (data.error) {
          dispatch({ type: "NUTRITION_CHANGE_FAILED", payload: data.error });
          // console.log(data);
        } else {
          dispatch({ type: "NUTRITION_CHANGE_SUCCESS", payload: updatedFruit });
          // console.log(data);
        }
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "NUTRITION_CHANGE_FAILED", payload: error });
    });
};
