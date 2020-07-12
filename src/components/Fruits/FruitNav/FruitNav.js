import React from "react";
import FruitLists from "../FruitsList/FruitsList";
import FruitDetails from "../FruitDetails/FruitDetails";
import Favorites from "../Favorites/Favorites";

const fruitNav = () => {
  return (
    <div>
      fruitNav
      <FruitLists />
      <FruitDetails />
      <Favorites />
    </div>
  );
};

export default fruitNav;
