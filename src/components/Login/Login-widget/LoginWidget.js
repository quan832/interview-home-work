import userpng from "./user.png";
import "./LoginWidget.css";
import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LoginWidget() {
  const user = useSelector((state) => {
    return state.loginUserReducer.user;
  });

  return (
    <div className="card my-4">
      <div className="card-body">
        <div className="tutor_img">
          {!user.username ? (
            <NavLink to="/login">
              <img src={userpng} alt="" />
            </NavLink>
          ) : (
            <img src={`./images/user/img-${user.id}.jpg`} alt="" />
          )}
        </div>
        <div className="tutor_content_dt">
          <div className="tutor150">
            {!user.username ? (
              <Link className="tutor_name" to="/login" href="/login">
                Login Your Blog
              </Link>
            ) : (
              <Fragment>
                <span className="tutor_name" to="/login" href="/login">
                  {user.name === "" ? "default" : user.name}
                </span>
              </Fragment>
            )}
          </div>
          {!user.username ? (
            <div></div>
          ) : (
            <Fragment>
              <div class="tutor_cate">
                <span>I'm frontend developer</span>
              </div>
            </Fragment>
          )}

          <ul className="tutor_social_links">
            <li>
              <a href="#" className="fb">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#" className="tw">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="ln">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#" className="yu">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
          <a />
        </div>
      </div>
    </div>
  );
}
