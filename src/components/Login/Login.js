import React from "react";
import { Link } from "react-router-dom";

const login = (props) => {
  return (
    <div className="login">
      <div className="heading">
        <h2>Login</h2>
      </div>
      <form action="#">
        <div className="input-group input-group-lg">
          <span className="input-group-addon">
            <i className="fa fa-envelope"></i>
          </span>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="input-group input-group-lg">
          <span className="input-group-addon">
            <i className="fa fa-lock"></i>
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <Link to="/fruitlists">
          <button type="submit" className="float" onClick={console.log(props)}>
            Login
          </button>
        </Link>
        <h3>
          Don't have an Account?{" "}
          <Link to="/register">
            <button>Register Here</button>
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default login;
