import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import Image from "../Fruits/FruitDetails/Red Apple.png";

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
    fetch("http://localhost:3003/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then(({ user, token }) => {
        if (user && user._id) {
          this.props.history.push("/getFruits");
        }
      });
  };

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

          <Link to="">
            <button
              type="submit"
              className={styles.button}
              onClick={this.onSubmitSignIn}
            >
              Login
            </button>
          </Link>
          <h3 className={styles.h3margin}>
            Don't have an Account?{" "}
            <Link to="/register">
              <button className={styles.button}>Register Here</button>
            </Link>
          </h3>
        </form>
      </div>
    );
  }
}

export default Login;
