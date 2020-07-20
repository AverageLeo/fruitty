import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  margin: 0.8rem;
  h4 {
    font-family: "Roboto Slab", serif;
    list-style: none;
    cursor: pointer;
    letter-spacing: 1px;
  }
  span {
    transition: margin-left 0.3s ease-in-out;
  }
  :hover span {
    margin-left: 8px;
  }
`;

const fruit = ({ fruitDetails }) => {
  return (
    <ListItem>
      <h4>
        {fruitDetails.name} <span>{">"}</span>
      </h4>
    </ListItem>
  );
};

export default fruit;
