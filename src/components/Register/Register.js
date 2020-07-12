import React from "react";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="register">
      <div className="heading">
        <h2>Register</h2>
      </div>
      <form action="#">
        <div className="input-group input-group-lg">
          <span className="input-group-addon">
            <i className="fa fa-user"></i>
          </span>
          <input type="text" className="form-control" placeholder="Name" />
        </div>

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
          <button type="submit" className="float">
            Register
          </button>
        </Link>
        <h3>
          Already have an Account?{" "}
          <Link to="/">
            <button>Login Here</button>
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default register;
