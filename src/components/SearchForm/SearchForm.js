import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="input-group mb-3">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="searchEmployees"
        />
        <div className="input-group-append">
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-primary mt-3"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
