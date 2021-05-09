import React, { Fragment } from "react";
// setup Route
import { Route } from "react-router";
// import component
import Header from "../components/Header/Header";
export default function HomeTemplate(props) {
  // declare component, route
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            {/* Header */}
            <Header></Header>
            <div className="container">
              <div class="row">
                <Component {...propsRoute} />
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
}
