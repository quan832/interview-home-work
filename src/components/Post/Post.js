import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getComment, getPost, getUsers } from "../../redux/actions";
import "./Post.css";

export default function Post(props) {
  // get reducer
  const Posts = useSelector((state) => {
    return state.getBlogsReducer.result;
  });

  const users = useSelector((state) => state.getUsersReducer.result);
  const comments = useSelector((state) => state.getCommentsReducer.result);

  // dispatch
  const dispatch = useDispatch();
  // call api
  useEffect(() => {
    dispatch(getPost());
    dispatch(getUsers());
    dispatch(getComment());
  }, []);

  // render one Post
  const renderListPost = () => {
    return Posts?.map((post, index) => {
      let authority = users
        ?.filter((item) => {
          return item.id == post.owner;
        })
        .map((item) => {
          return item.username;
        });

      const commentPost = comments.filter((item) => {
        return item.post == post.id;
      });

      return (
        <Fragment>
          <div className="card mb-4" key={index}>
            <Link to={`/detail${post.id}`}>
              <img
                className="card-img-top"
                src={`./images/${post.id}.png`}
                alt="Card image cap"
              />
            </Link>
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
              Posted by
              <a href="#!"> {authority}</a> - {commentPost.length} comment
            </div>
          </div>
        </Fragment>
      );
    });
  };
  // render search
  const renderPostSearch = () => {
    return Posts?.filter((item) => {
      console.log(item);
      return item.title.toLowerCase().includes(props.search.toLowerCase());
    }).map((post, index) => {
      // get auth name
      let authority = users
        ?.filter((item) => {
          return item.id == post.owner;
        })
        .map((item) => {
          return item.username;
        });
      return (
        <Fragment>
          <div className="card mb-4" key={index}>
            <Link to={`/detail${post.id}`}>
              <img
                className="card-img-top"
                src={`./images/${post.id}.png`}
                alt="Card image cap"
              />
            </Link>
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
              <a href="#!"> {authority}</a>
            </div>
          </div>
        </Fragment>
      );
    });
  };
  return (
    // Blog post
    <Fragment>
      {" "}
      {props.search === "" ? renderListPost() : renderPostSearch()}
    </Fragment>
  );
}
