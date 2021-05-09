import React, { Fragment } from "react";
import LoginWidget from "../../components/Login/Login-widget/LoginWidget";
import Search from "../../components/Search/Search";
import PostDetail from "../../components/Detail/PostDetail";

export default function Detail() {
  return (
    <Fragment>
      {/* Post Content */}
      <div className="col-lg-8">
        <PostDetail />
      </div>

      {/*  Sidebar widgets column*/}
      <div className="col-lg-4">
        <Search />
        <LoginWidget />
      </div>
    </Fragment>
  );
}
