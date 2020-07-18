import React from "react";
import styles from "./Fruit.module.css";

const fruit = ({ fruitDetails }) => {
  return (
    <li className={styles.li}>
      <div className="fruit">
        <div>
          <h4>
            {fruitDetails.name} <span className={styles.arrow}>{">"}</span>
          </h4>
        </div>
      </div>
    </li>
  );
};

export default fruit;
