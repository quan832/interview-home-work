import React, { Fragment } from "react";
//import compontent
import Post from "../../components/Post/Post";
import Search from "../../components/Search/Search";
import LoginWidget from "../../components/Login/Login-widget/LoginWidget";

export default function Home() {
  return (
    <Fragment>
      {/* blog entries */}
      <div class="col-md-8">
        <h1 class="my-4">Blogs</h1>
        {/* all post in here */}
        <Post />
      </div>
      {/* side widgets */}
      <div class="col-md-4">
        <Search />
        {/* user login */}
        <LoginWidget />
      </div>
    </Fragment>
  );
}
