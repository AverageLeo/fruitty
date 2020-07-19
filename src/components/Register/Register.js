import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Register.module.css";
import Image from "../../assets/fruits.png";

class Register extends Component {
  state = {
    registerName: "",
    registerEmail: "",
    registerPassword: "",
  };

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("http://localhost:3003/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword,
      }),
    })
      .then((response) => response.json())
      .then(({ user }) => {
        if (user && user._id) {
          this.props.history.push("/login");
        }
      });
  };

  render() {
    return (
      <div className="register">
        <div className={styles.heading}>
          <h2>Register</h2>
        </div>
        <img className={styles.image} src={Image} alt="fruit" width="200px" />
        <form action="#">
          <div className={styles.input}>
            <span className="input-group-addon">
              <i className={styles.fa + " fa fa-user"}></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={this.onNameChange}
            />
          </div>

          <div className={styles.input}>
            <span className="input-group-addon">
              <i className={styles.fa + " fa fa-envelope"}></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={this.onEmailChange}
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
              this.onSubmitRegister();
            }}
          >
            Register
          </button>
        </form>
        <h3 className={styles.h3margin}>
          Already have an Account?{" "}
          <Link to="/login">
            <button className={styles.button}>Login Here</button>
          </Link>
        </h3>
      </div>
    );
  }
}

export default Register;
