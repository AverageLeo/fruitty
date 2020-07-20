import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../../UI/Button";
import Fruit from "../Fruit/Fruit";

const Title = styled.div`
  font-family: "Bree Serif", serif;
  font-size: 3rem;
  margin: 2rem;
  border-bottom: 2px solid rgba(112, 112, 112, 0.3);
`;

const NavButton = styled(Button)`
  margin: 0 10px;
`;

const FruitsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 60%;
    a {
      text-decoration: none;
      color: #000;
    }
  }
  li {
    list-style: none;
    padding: 5px;
    border: 2px solid rgba(112, 112, 112, 0.3);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    :hover {
      background-color: rgb(221, 255, 208);
    }
  }
`;

const FruitsList = (props) => {
  const getFruitsItems = () => {
    return props.fruits.map((fruit) => {
      return (
        <Link
          to={`/fruitdetails/${fruit.name.toLowerCase()}`}
          key={fruit.id}
          genus={fruit.genus}
        >
          <Fruit fruitDetails={fruit} />
        </Link>
      );
    });
  };

  return (
    <div className="fruitsList">
      <Title>Fruits List</Title>
      <NavLink to="/getFruits">
        <NavButton>Fruits</NavButton>
      </NavLink>
      <NavLink to="/favorites">
        <NavButton>Favorites</NavButton>
      </NavLink>
      <FruitsBox>
        <ul>{getFruitsItems()}</ul>
      </FruitsBox>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruits: state.requestFruitsReducer.fruits,
  };
};

export default connect(mapStateToProps)(FruitsList);
