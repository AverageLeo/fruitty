import React from "react";
import styles from "./Fruit.module.css";

const fruit = ({ fruitDetails }) => {
  return (
    <li className={styles.li}>
      <h4>
        {fruitDetails.name} <span className={styles.arrow}>{">"}</span>
      </h4>
    </li>
  );
};

export default fruit;
