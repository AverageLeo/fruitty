import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import FruitsList from "./fruits.json";
import styles from "./FruitsList.module.css";
import Fruit from "../Fruit/Fruit";

const fruitsList = (props) => {
  console.log(props.fruits);
  return (
    <div className="fruitsList">
      <div className="heading2">
        <h2>Fruits List</h2>
        <NavLink to="/getFruits">
          <button className={styles.fruitButtons}>Fruits</button>
        </NavLink>
        <NavLink to="/favorites">
          <button className={styles.fruitButtons}>Favorites</button>
        </NavLink>
        <div className={styles.fruitsBox}>
          <ul>
            {FruitsList.map((fruit, i) => {
              return (
                <Link to="/fruitdetails/" key={fruit.id}>
                  <Fruit id={fruit.id} name={fruit.name} />
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
    fruits: state.fruits,
  };
};

export default connect(mapStateToProps)(fruitsList);
