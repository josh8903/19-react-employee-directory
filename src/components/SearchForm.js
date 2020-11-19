import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="searchEmployees"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-secondary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
