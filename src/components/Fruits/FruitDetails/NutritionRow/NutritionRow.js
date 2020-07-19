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
        // Nutrition row in Edit mode, Label becomes Input
        <label className={styles.inputMode}>
          <input
            className={styles.InputName + " nutritionsInfoName"}
            defaultValue={NutritionsNameUpperCase}
          />
          <input
            className={styles.Input + " nutritionsInfoValue"}
            defaultValue={props.nutritionsValue}
          />
          <i
            className={
              styles.deleteIcon + " far fa-minus-square nutritionsInfoRowDelete"
            }
            onClick={() => {
              props.nutritionsInfoRowDeleteHandler(
                props.nutritionsName,
                props.fruitInfo
              );
            }}
          />
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
