import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment, getDetailPost, getUsers } from "../../redux/actions";

export default function PostDetail(props) {
  //redux
  const dispatch = useDispatch();
  // get data from reducer
  const detailPost = useSelector((state) => state.getBlogsReducer.detailPost);
  const users = useSelector((state) => state.getUsersReducer.result);
  const comments = useSelector((state) => state.getCommentsReducer.result);

  let authorityName;
  let idPost = props.id;

  let authority = users
    ?.filter((item) => {
      return item.id == detailPost.owner;
    })
    .map((item) => {
      authorityName = item.username;
      return item;
    });

  useEffect(() => {
    // action
    dispatch(getDetailPost(idPost));
    dispatch(getUsers());
    dispatch(getComment());
  }, []);

  const renderComments = () => {
    const commentPost = comments.filter((item) => {
      return item.post == idPost;
    });

    return commentPost.map((item, index) => {
      return (
        <div className="media mb-4">
          <img
            className="d-flex mr-3 rounded-circle"
            src={`./images/user/img-${item.owner}.jpg`}
            alt="..."
            width="50"
          />
          <div className="media-body">
            <h5 className="mt-0">{users[item.owner].username}</h5>
            {item.content}
          </div>
        </div>
      );
    });
  };
  return (
    <Fragment key={detailPost.id}>
      <div>
        {/* Title*/}
        <h1 className="mt-4">{detailPost.title}</h1>
        {/* Author*/}
        <p className="lead">
          by
          <a href="#!"> {authorityName}</a>
        </p>
        <hr />
        {/* Date and time*/}
        <p>Posted on January 1, 2021 at 12:00 PM</p>
        <hr />
        {/* Preview image*/}
        <img
          className="img-fluid rounded"
          src={`./images/${detailPost.id}.png`}
          alt="..."
        />
        <hr />
        {/* Post content*/}
        <p className="lead">{detailPost.content}</p>

        <blockquote className="blockquote">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in
            <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>

        <hr />
        {/* Comments form*/}
        <div className="card my-4">
          <h5 className="card-header">Leave a Comment:</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr class="mb-3"></hr>
        {renderComments()}
      </div>
    </Fragment>
  );
}
