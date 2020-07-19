import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./Favorites.module.css";
import Fruit from "../Fruit/Fruit";

const Favorites = (props) => {
  const getFavoriteFruitsItems = () => {
    const favoriteFruits = props.fruits.filter((fruit) => {
      return props.favoriteFruitsNamesList.includes(fruit.name);
    });
    return favoriteFruits.map((fruit) => {
      return (
        <Link
          to={`/fruitdetails/${fruit.name.toLowerCase()}`}
          key={fruit.id}
          genus={fruit.genus}
        >
          <Fruit fruitDetails={fruit} />
        </Link>
      );
    });
  };

  return (
    <div className="favorites">
      <div className="heading2">
        <div className={styles.title}>Favorites</div>
        <NavLink to="/getFruits">
          <button className={styles.fruitButtons}>Fruits</button>
        </NavLink>
        <NavLink to="/favorites">
          <button className={styles.fruitButtons}>Favorites</button>
        </NavLink>

        <div className={styles.fruitsBox}>
          <ul>{getFavoriteFruitsItems()}</ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruits: state.requestFruitsReducer.fruits,
    favoriteFruitsNamesList:
      state.localFavoriteFruitsReducer.favoriteFruitsNamesList,
  };
};

export default connect(mapStateToProps)(Favorites);
