import React, { Fragment, useState } from "react";
//import compontent
import Post from "../../components/Post/Post";
import Search from "../../components/Search/Search";
import LoginWidget from "../../components/Login/Login-widget/LoginWidget";
import Categories from "../../components/Categories/Categories";
export default function Home() {
  const [search, setSearch] = useState("");

  // set state search -> pass props to post
  function handleChange(newValue) {
    setSearch(newValue);
  }

  return (
    <Fragment>
      {/* blog entries */}
      <div class="col-md-8">
        <h1 class="my-4">Blogs</h1>
        {/* all post in here */}
        <Post search={search} />
      </div>
      {/* side widgets */}
      <div class="col-md-4">
        <Search onChange={handleChange} value={search} />
        {/* user login */}
        <LoginWidget />
        <Categories />
      </div>
    </Fragment>
  );
}
