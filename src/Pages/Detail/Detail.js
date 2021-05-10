import React, { Fragment } from "react";
import LoginWidget from "../../components/Login/Login-widget/LoginWidget";
import PostDetail from "../../components/Detail/PostDetail";
import Categories from "../../components/Categories/Categories";

export default function Detail(props) {
  let { id } = props.match.params;

  return (
    <Fragment>
      {/* Post Content */}
      <div className="col-lg-8">
        <PostDetail id={id} />
      </div>

      {/*  Sidebar widgets column*/}
      <div className="col-lg-4">
  
        <LoginWidget />
        <Categories />
      </div>
    </Fragment>
  );
}
