import React from "react";
import styles from "./Fruit.module.css";

const fruit = ({ name, id }) => {
  return (
    <li className={styles.li}>
      <div className="fruit">
        <div>
          <h4>
            {name} {">"}
          </h4>
        </div>
      </div>
    </li>
  );
};

export default fruit;
