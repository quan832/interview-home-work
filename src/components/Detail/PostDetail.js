import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPost, getUsers } from "../../redux/actions";

export default function PostDetail(props) {
  //redux
  const dispatch = useDispatch();
  // get data from reducer
  const detailPost = useSelector((state) => state.getBlogsReducer.detailPost);
  const users = useSelector((state) => state.getUsersReducer.result);

  useEffect(() => {
    // action
    const id = props.id;
    dispatch(getDetailPost(id));
    dispatch(getUsers());
  }, []);

  let authority = users?.filter((item) => {
    return item.id == detailPost.owner;
  });

  return (
    <Fragment key={detailPost.id}>
      <div>
        {/* Title*/}
        <h1 className="mt-4">{detailPost.title}</h1>
        {/* Author*/}
        <p className="lead">
          by
          <a href="#!"> {!authority ? " " : authority[0].username}</a>
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
        {/* Single comment*/}
        <div className="media mb-4">
          <img
            className="d-flex mr-3 rounded-circle"
            src="https://via.placeholder.com/50x50"
            alt="..."
          />
          <div className="media-body">
            <h5 className="mt-0">Commenter Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
        {/* Comment with nested comments*/}
        <div className="media mb-4">
          <img
            className="d-flex mr-3 rounded-circle"
            src="https://via.placeholder.com/50x50"
            alt="..."
          />
          <div className="media-body">
            <h5 className="mt-0">Commenter Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
            <div className="media mt-4">
              <img
                className="d-flex mr-3 rounded-circle"
                src="https://via.placeholder.com/50x50"
                alt="..."
              />
              <div className="media-body">
                <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </div>
            <div className="media mt-4">
              <img
                className="d-flex mr-3 rounded-circle"
                src="https://via.placeholder.com/50x50"
                alt="..."
              />
              <div className="media-body">
                <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
