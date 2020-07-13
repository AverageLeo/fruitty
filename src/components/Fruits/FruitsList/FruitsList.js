import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./FruitsList.module.css";

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
            <Link to="/fruitdetails">
              <li>Red Apple</li>
            </Link>
            <li>Green Apple</li>
            <li>Banana</li>
            <li>Pineapple</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
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
