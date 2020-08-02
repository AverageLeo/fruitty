import React from "react";
import styled from "styled-components";

const InputName = styled.input`
  width: 120px;
  border: 1px dotted rgb(162, 196, 151);
  background-color: rgb(217, 243, 208);
  text-align: center;
  font: inherit;
  padding: unset;
  margin-left: 3px;
`;

const InputValue = styled(InputName)`
  width: 40px;
`;

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
        <label>
          <InputName
            className={"nutritionsInfoName"}
            defaultValue={NutritionsNameUpperCase}
          />
          <InputValue
            className={"nutritionsInfoValue"}
            defaultValue={props.nutritionsValue}
          />
          <i
            className={"far fa-minus-square nutritionsInfoRowDelete"}
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => {
              props.deleteNutritionHandler(
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
