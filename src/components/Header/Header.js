import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  //get user
  const user = useSelector((state) => {
    return state.loginUserReducer.user;
  });

  return (
    //navigation
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Start Blog
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/home">
                Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Blog
              </a>
            </li>
            <li className="nav-item">
              {!user.username ? (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => {
                    localStorage.clear();
                    window.location.assign("/login");
                  }}
                  className="nav-link"
                  to="/login"
                >
                  Logout
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
