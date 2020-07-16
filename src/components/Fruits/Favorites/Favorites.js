import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./Favorites.module.css";
import Fruit from "../Fruit/Fruit";

const favoriteFruitsNamesList = ["Orange", "Apple", "Tomato"];
localStorage.setItem(
  "favoriteFruitsNamesList",
  JSON.stringify(favoriteFruitsNamesList)
);
const storedFruits = JSON.parse(
  localStorage.getItem("favoriteFruitsNamesList")
);

let favoriteFruits = "";

const favorites = (props) => {
  const myFunction = () => {
    favoriteFruits = props.fruits.filter((fruit) => {
      return storedFruits.includes(fruit.name);
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
          <ul>
            {myFunction()}
            {favoriteFruits.map((fruit, i) => {
              return (
                <Link
                  to={`/fruitdetails/${fruit.name.toLowerCase()}`}
                  key={fruit.id}
                  genus={fruit.genus}
                >
                  <Fruit fruitDetails={fruit} />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruits: state.requestFruitsReducer.fruits,
  };
};

export default connect(mapStateToProps)(favorites);
