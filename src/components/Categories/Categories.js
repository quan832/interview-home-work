import React from "react";

export default function Categories() {
  return (
    //   categories widget
    <div className="card my-4">
      <h5 className="card-header">Categories</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!">consult</a>
              </li>
              <li>
                <a href="#!">it</a>
              </li>
              <li>
                <a href="#!">hala</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!">gov</a>
              </li>
              <li>
                <a href="#!">legal</a>
              </li>
              <li>
                <a href="#!">political</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
