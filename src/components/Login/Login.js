import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../UI/Button";
import Image from "../../assets/fruits.png";
import { loginUserActionCreator } from "../../actions/actions";

export const Header = styled.footer`
  font-size: 5rem;
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: 5px;
  font-family: "Bree Serif", serif;
  h2 {
    margin: 2rem 0 1rem 0;
  }
`;

export const Input = styled.input`
  margin: 4px;
  padding: 9px;
  background-color: rgba(255, 255, 255, 0.5);
  &:hover,
  &:focus {
    color: black;
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

class Login extends Component {
  state = {
    signInEmail: "",
    signInPassword: "",
  };

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    this.props.onLoginUser(this.state.signInEmail, this.state.signInPassword);
  };

  componentDidUpdate() {
    // if props got the user it means the API user authentication
    // check was successful and the user is logged-in
    if (this.props.user) {
      this.props.history.push("/getFruits");
    }
  }

  render() {
    return (
      <div className="login">
        <Header>
          <h2>Login</h2>
        </Header>
        <img src={Image} alt="fruit" width="200px" />
        <form action="#">
          <i className={"fa fa-envelope"} style={{ marginRight: "5px" }}></i>
          <Input
            type="email"
            onChange={this.onEmailChange}
            className="form-control"
            placeholder="Email"
          />

          <div>
            <i className={"fa fa-lock"} style={{ marginRight: "5px" }} />
            <Input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </div>

          <Button
            type="submit"
            onClick={(event) => {
              // PreventDefault helps against form default behavior of re-rendering
              event.preventDefault();
              this.onSubmitSignIn();
            }}
          >
            Login
          </Button>
        </form>
        <h3>
          Don't have an Account?{" "}
          <Link to="/register">
            <Button style={{ marginLeft: "10px" }}>Register Here</Button>
          </Link>
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginUserReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: (email, password) => {
      return dispatch(loginUserActionCreator(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
