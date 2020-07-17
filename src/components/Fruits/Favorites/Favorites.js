import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./Favorites.module.css";
import Fruit from "../Fruit/Fruit";
import { readLocalFavoriteFruitsActionCreator } from "../../../actions/actions";

const Favorites = (props) => {
  const getFavoriteFruitsItems = () => {
    const favoriteFruits = props.fruits.filter((fruit) => {
      return props.favoriteFruitsNamesList.includes(fruit.name);
    });
    return favoriteFruits.map((fruit, i) => {
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
        <h2>Favorites</h2>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onFavoriteClick: () => {
      return dispatch(readLocalFavoriteFruitsActionCreator());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    fruits: state.requestFruitsReducer.fruits,
    favoriteFruitsNamesList:
      state.localFavoriteFruitsReducer.favoriteFruitsNamesList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
