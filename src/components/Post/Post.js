import React, { Fragment } from "react";
import blog from "./images/blog.png";

export default function Post() {
  return (
    // Blog post
    <Fragment>
      <div className="card mb-4">
        <img className="card-img-top" src={blog} alt="Card image cap" />
        <div className="card-body">
          <h2 className="card-title">Post Title</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta
            expedita corporis animi vero voluptate voluptatibus possimus, veniam
            magni quis!
          </p>
          <a className="btn btn-primary" href="#!">
            Read More →
          </a>
        </div>
        <div className="card-footer text-muted">
          Posted on January 1, 2021 by
          <a href="#!">Start Bootstrap</a>
        </div>
      </div>
      <div className="card mb-4">
        <img className="card-img-top" src={blog} alt="Card image cap" />
        <div className="card-body">
          <h2 className="card-title">Post Title</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta
            expedita corporis animi vero voluptate voluptatibus possimus, veniam
            magni quis!
          </p>
          <a className="btn btn-primary" href="#!">
            Read More →
          </a>
        </div>
        <div className="card-footer text-muted">
          Posted on January 1, 2021 by
          <a href="#!">Start Bootstrap</a>
        </div>
      </div>
      <div className="card mb-4">
        <img className="card-img-top" src={blog} alt="Card image cap" />
        <div className="card-body">
          <h2 className="card-title">Post Title</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta
            expedita corporis animi vero voluptate voluptatibus possimus, veniam
            magni quis!
          </p>
          <a className="btn btn-primary" href="#!">
            Read More →
          </a>
        </div>
        <div className="card-footer text-muted">
          Posted on January 1, 2021 by
          <a href="#!">Start Bootstrap</a>
        </div>
      </div>
    </Fragment>
  );
}
