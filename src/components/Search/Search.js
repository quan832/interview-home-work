import React from "react";

export default function Search(props) {
  // handle change
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    //search widget
    <div className="card my-4">
      <h5 className="card-header">Search</h5>
      <div className="card-body">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="search"
            value={props.value}
            onChange={handleChange}
            placeholder="Search for..."
          />
          <span className="input-group-append">
            <button type="submit" className="btn btn-secondary" type="button">
              Go!
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
