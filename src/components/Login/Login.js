import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./Login.module.css";
import Image from "../../assets/fruits.png";
import { loginUserActionCreator } from "../../actions/actions";

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
        <div className={styles.heading}>
          <h2>Login</h2>
        </div>
        <img className={styles.image} src={Image} alt="fruit" width="200px" />
        <form action="#">
          <div className={styles.input}>
            <span className="input-group-addon">
              <i className={styles.fa + " fa fa-envelope"}></i>
            </span>
            <input
              type="email"
              onChange={this.onEmailChange}
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className={styles.input}>
            <span className="input-group-addon">
              <i className={styles.fa + " fa fa-lock"}></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            onClick={(event) => {
              // PreventDefault helps against form default behavior of re-rendering
              event.preventDefault();
              this.onSubmitSignIn();
            }}
          >
            Login
          </button>
        </form>
        <h3 className={styles.h3margin}>
          Don't have an Account?{" "}
          <Link to="/register">
            <button className={styles.button}>Register Here</button>
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
