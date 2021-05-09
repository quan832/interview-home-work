import React from "react";

export default function Search() {
  return (
    //search widget
    <div className="card my-4">
      <h5 className="card-header">Search</h5>
      <div className="card-body">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
          />
          <span className="input-group-append">
            <button className="btn btn-secondary" type="button">
              Go!
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
