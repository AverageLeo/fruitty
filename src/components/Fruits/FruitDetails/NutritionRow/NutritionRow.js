import React from "react";
import styles from "./NutritionRow.module.css";

const nutritionRow = (props) => {
  //Uppercasing first letter
  const NutritionsNameLowerCase = props.nutritionsName;
  const NutritionsNameUpperCase = capitalizeFirstLetter(
    NutritionsNameLowerCase
  );
  function capitalizeFirstLetter(NutritionsNameLowerCase) {
    return (
      NutritionsNameLowerCase.charAt(0).toUpperCase() +
      NutritionsNameLowerCase.slice(1)
    );
  }

  return (
    <div>
      {props.editMode ? (
        <label className={styles.inputMode}>
          <b>{NutritionsNameUpperCase}:</b>
          <input
            className={styles.Input + " nutritionsInfo"}
            defaultValue={props.nutritionsValue}
          />
          <i className={styles.deleteIcon + " far fa-minus-square"} />
        </label>
      ) : (
        <label>
          <b>{NutritionsNameUpperCase}:</b> {props.nutritionsValue}
        </label>
      )}
    </div>
  );
};

export default nutritionRow;
