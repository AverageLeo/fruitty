import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button";
import { Header, Input } from "../Login/Login";
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
        <Header>
          <h2>Register</h2>
        </Header>

        <img src={Image} alt="fruit" width="200px" />

        <form action="#">
          <div>
            <span className="input-group-addon">
              <i className="fa fa-user" style={{ marginRight: "5px" }} />
            </span>
            <Input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={this.onNameChange}
            />
          </div>

          <div>
            <span className="input-group-addon">
              <i className="fa fa-envelope" style={{ marginRight: "5px" }} />
            </span>
            <Input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={this.onEmailChange}
            />
          </div>

          <div>
            <span className="input-group-addon">
              <i className="fa fa-lock" style={{ marginRight: "5px" }} />
            </span>
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
              this.onSubmitRegister();
            }}
          >
            Register
          </Button>
        </form>
        <h3 style={{ marginLeft: "10px" }}>
          Already have an Account?{" "}
          <Link to="/login">
            <Button>Login Here</Button>
          </Link>
        </h3>
      </div>
    );
  }
}

export default Register;
