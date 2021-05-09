import React, { Fragment } from "react";
import login from "./images/login.jpg";
import logo from "./images/logo.svg";


export default function FormLogin() {
  return (
    <Fragment>
      <div className="col-md-5">
        <img src={login} alt="login" className="login-card-img" />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <div className="brand-wrapper">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <p className="login-card-description">Sign into your account</p>
          <form action="#!">
            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="***********"
              />
            </div>
            <input
              name="login"
              id="login"
              className="btn btn-block login-btn mb-4"
              type="button"
              defaultValue="Login"
            />
          </form>
          <a href="#!" className="forgot-password-link">
            Forgot password?
          </a>
          <p className="login-card-footer-text">
            Don't have an account?{" "}
            <a href="#!" className="text-reset">
              Register here
            </a>
          </p>
          <nav className="login-card-footer-nav">
            <a href="#!">Terms of use.</a>
            <a href="#!">Privacy policy</a>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}
