// Action-creator that actions fetchinging Fruits-list
// and dispaching an action to the reducer accordingly

export const requestFruitsActionCreator = () => (dispatch) => {
  dispatch({ type: "REQUEST_FRUITS_PENDING" });
  fetch("http://localhost:3003/getFruits", {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
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
