import React from "react";

const login = ({ name, email, id }) => {
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

        <button type="submit" className="float">
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
