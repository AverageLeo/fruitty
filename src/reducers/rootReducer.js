const initState = {
  fruits: [
    { id: "1", title: "apple" },
    { id: "2", title: "orange" },
  ],
};

const rootReducer = (state = initState, action) => {
  // if (action.type === "") {
  //   return {
  //     ...state,
  //     fruits: newFruits,
  //   };
  // }
  console.log(action);
  return state;
};

export default rootReducer;
