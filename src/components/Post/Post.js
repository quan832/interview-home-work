import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPost } from "../../redux/actions";
import "./Post.css";

export default function Post() {
  // get reducer
  const Posts = useSelector((state) => {
    return state.getBlogsReducer.result;
  });

  // dispatch
  const dispatch = useDispatch();
  // call api
  useEffect(() => {
    dispatch(getPost());
  }, []);

  console.log(Posts);
  // render one Post
  const renderListPost = () => {
    return Posts?.map((post, index) => {
      return (
        <Fragment>
          <div className="card mb-4" key={index}>
            <img
              className="card-img-top"
              src={`./images/${post.id}.png`}
              alt="Card image cap"
            />
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text content">
                <span>
                  {post.content.length > 100
                    ? post.content.substring(0, 100)
                    : post.content}
                </span>
              </p>
              <NavLink className="btn btn-primary" to={`/detail${post.id}`}>
                Read More →
              </NavLink>
            </div>
            <div className="card-footer text-muted">
              Posted on January 1, 2021 by
              <a href="#!"> Start Bootstrap</a>
            </div>
          </div>
        </Fragment>
      );
    });
  };

  return (
    // Blog post
    <Fragment> {renderListPost()}</Fragment>
  );
}
