import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./FruitsList.module.css";
import Fruit from "../Fruit/Fruit";

const fruitsList = (props) => {
  return (
    <div className="fruitsList">
      <div className="heading2">
        <div className={styles.title}>Fruits List</div>
        <NavLink to="/getFruits">
          <button className={styles.fruitButtons}>Fruits</button>
        </NavLink>
        <NavLink to="/favorites">
          <button className={styles.fruitButtons}>Favorites</button>
        </NavLink>
        <div className={styles.fruitsBox}>
          <ul>
            {props.fruits.map((fruit) => {
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

export default connect(mapStateToProps)(fruitsList);
