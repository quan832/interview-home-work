import user from "./user.png";
import "./LoginWidget.css";
import React from "react";

export default function LoginWidget() {
  return (
    <div className="card my-4">
      <div className="card-body">
        <div className="tutor_img">
          <a href="my_instructor_profile_view.html">
            <img src={user} />
          </a>
        </div>
        <div className="tutor_content_dt">
          <div className="tutor150">
            <a className="tutor_name tutor_name_active" href="/login">
              Login Your Blog
            </a>
          </div>
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
