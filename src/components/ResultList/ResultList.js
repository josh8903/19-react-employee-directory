import React from "react";
import "./style.css";

function ResultList(props) {
  return (
    <div className="container">
      <div id="tableWrapper" className="row">
        <table className="table table-striped table-hover">
          <thead>
            <tr id="tableHeader" className="bg-warning">
              <th scope="col">Profile Photo</th>
              <th scope="col" onClick={props.handleSort}>
                Name
              </th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((result, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img alt="Profile" src={result.picture.thumbnail} />
                  </td>
                  <td>
                    {result.name.first} {result.name.last}
                  </td>
                  <td>{result.phone}</td>
                  <td>{result.email}</td>
                  <td>{result.location.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultList;
