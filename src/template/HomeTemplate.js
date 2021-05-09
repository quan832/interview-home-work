import React from "react";
// setup Route
import { Route } from "react-router";

export default function HomeTemplate(props) {
  // declare component, route
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <div className="HomeTemplate">
            {/* Header */}

            <div className="wrapper">
              <div class="sa4d25">
                <Component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
