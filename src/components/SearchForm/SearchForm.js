import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="container">
      <div id="searchWrapper" className="row">
        <form id="search-group">
          <div className="input-group mb-3">
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for employees"
              id="searchEmployees"
            />
            <div className="input-group-append">
              <button
                onClick={props.handleFormSubmit}
                className="btn btn-warning mt-3"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
