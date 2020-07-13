import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Favorites.module.css";

const favorites = () => {
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
            <li>Red Apple</li>
            <li>Banana</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default favorites;
